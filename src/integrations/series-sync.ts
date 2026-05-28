import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import yaml from "js-yaml";
import matter from "gray-matter";
import type { AstroIntegration } from "astro";

/** Where series configs (series.yaml, index.md) and chapter files live */
const SERIES_ROOT = path.join(
	process.cwd(),
	"src",
	"content",
	"posts",
	"Sets_of_doc",
);

const CHAPTER_EXTENSIONS = [".md", ".mdx"];

interface SeriesSyncConfig {
	sync?: {
		source: string;
	};
}

function isChapterFile(filename: string): boolean {
	const ext = path.extname(filename).toLowerCase();
	const basename = path.basename(filename, ext);
	// Skip index files and series.yaml
	if (basename === "index" || filename === "series.yaml") return false;
	return CHAPTER_EXTENSIONS.includes(ext);
}

/**
 * Ensure a synced chapter file has a `title` in its frontmatter.
 * If missing, extract from the first `# heading` or fall back to filename.
 * Also normalizes Obsidian-specific syntax incompatible with the blog pipeline.
 * Returns true if the file was modified.
 */
function ensureTitle(targetPath: string): boolean {
	let raw = fs.readFileSync(targetPath, "utf-8");
	let modified = false;

	// Normalize: strip "!" from Obsidian embed links ![[...]] → [[...]]
	// (remark-wiki-link doesn't support the embed prefix)
	const embedFixed = raw.replace(/(?<!!)!\[\[(.+?)\]\]/g, "[[$1]]");
	if (embedFixed !== raw) {
		raw = embedFixed;
		modified = true;
	}

	// Normalize: convert wiki links to non-markdown files (PDF, images, etc.)
	// into plain markdown links. The wiki-link plugin crashes on non-md targets.
	const mediaFixed = raw.replace(
		/\[\[([^\]]+\.(?:pdf|png|jpg|jpeg|gif|svg|webp|avif|mp4|mov))\]\]/gi,
		"[$1]($1)",
	);
	if (mediaFixed !== raw) {
		raw = mediaFixed;
		modified = true;
	}

	// Normalize: convert ALL wiki links [[Target]] → [Target](Target)
	// The remark-wiki-link plugin crashes on some inputs; safer to inline as md links
	const wikiFixed = raw.replace(
		/\[\[([^\]]+?)\]\]/g,
		(_m: string, target: string) => {
			const parts = target.split("|");
			const label = parts.length > 1 ? parts[1] : parts[0];
			const slug = parts[0].replace(/\s+/g, "-").toLowerCase();
			return `[${label}](/posts/${slug}/)`;
		},
	);
	if (wikiFixed !== raw) {
		raw = wikiFixed;
		modified = true;
	}

	// Normalize: ensure space after ">" in blockquotes
	// Obsidian sometimes writes ">text" without space, which can break parsers
	const quoteFixed = raw.replace(/^(>)([^ \n>])/gm, "> $2");
	if (quoteFixed !== raw) {
		raw = quoteFixed;
		modified = true;
	}

	const parsed = matter(raw);
	if (parsed.data.title) {
		// Title exists, but still write back if embeds were fixed
		if (modified) {
			fs.writeFileSync(targetPath, raw, "utf-8");
		}
		return modified;
	}

	// Try to extract title from first # heading in the body
	let title = path.basename(targetPath, path.extname(targetPath));
	const headingMatch = parsed.content.match(/^#\s+(.+)$/m);
	if (headingMatch) {
		title = headingMatch[1].trim();
		// Remove leading numbers like "0　" or "1 "
		title = title.replace(/^\d+[\s　]+/, "").trim() || title;
	}

	// Reconstruct file with title inserted into frontmatter
	const lines = raw.split("\n");
	// Only scan first 5 lines for frontmatter delimiters (avoid matching
	// horizontal rules "---" deep in the content as frontmatter markers)
	const fmStart = lines[0]?.trim() === "---" ? 0 : -1;
	const fmEnd = fmStart >= 0
		? lines.findIndex((l, i) => i > fmStart && i <= fmStart + 10 && l.trim() === "---")
		: -1;

	if (fmStart >= 0 && fmEnd > fmStart) {
		lines.splice(fmStart + 1, 0, `title: "${title}"`);
	} else {
		lines.unshift("---", `title: "${title}"`, "---", "");
	}

	fs.writeFileSync(targetPath, lines.join("\n"), "utf-8");
	return true;
}

async function syncSeries(
	seriesFolder: string,
	config: SeriesSyncConfig,
): Promise<void> {
	const sourceDir = config.sync?.source;
	if (!sourceDir) return;

	if (!fs.existsSync(sourceDir)) {
		console.warn(
			`[series-sync] Source directory not found: ${sourceDir}`,
		);
		return;
	}

	const targetDir = path.join(SERIES_ROOT, seriesFolder);
	if (!fs.existsSync(targetDir)) {
		fs.mkdirSync(targetDir, { recursive: true });
	}

	const sourceFiles = fs
		.readdirSync(sourceDir, { withFileTypes: true })
		.filter((e) => e.isFile() && isChapterFile(e.name))
		.map((e) => e.name);

	let copied = 0;
	let skipped = 0;
	let titled = 0;

	for (const filename of sourceFiles) {
		const sourcePath = path.join(sourceDir, filename);
		const targetPath = path.join(targetDir, filename);

		const sourceStat = fs.statSync(sourcePath);

		if (fs.existsSync(targetPath)) {
			const targetStat = fs.statSync(targetPath);
			if (sourceStat.mtimeMs <= targetStat.mtimeMs) {
				skipped++;
				continue;
			}
		}

		await fsp.copyFile(sourcePath, targetPath);
		copied++;

		// Auto-add title if missing from frontmatter
		if (ensureTitle(targetPath)) titled++;
	}

	if (copied > 0 || skipped > 0) {
		const parts = [
			`${copied} copied`,
			skipped > 0 ? `${skipped} skipped` : null,
			titled > 0 ? `${titled} titled` : null,
		].filter(Boolean).join(", ");
		console.log(`[series-sync] "${seriesFolder}": ${parts}`);
	}
}

async function runSync(): Promise<void> {
	if (!fs.existsSync(SERIES_ROOT)) {
		console.log("[series-sync] Sets_of_doc directory not found, skipping sync.");
		return;
	}

	const seriesFolders = fs
		.readdirSync(SERIES_ROOT, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name);

	if (seriesFolders.length === 0) return;

	for (const folder of seriesFolders) {
		const yamlPath = path.join(SERIES_ROOT, folder, "series.yaml");
		if (!fs.existsSync(yamlPath)) continue;

		try {
			const raw = fs.readFileSync(yamlPath, "utf-8");
		const config = yaml.load(raw) as SeriesSyncConfig;
		if (config) {
			await syncSeries(folder, config);
		}
		} catch (err) {
			console.error(`[series-sync] Error syncing "${folder}":`, err);
		}
	}
}

export default function seriesSync(): AstroIntegration {
	return {
		name: "series-sync",
		hooks: {
			"astro:build:start": async () => {
				console.log("[series-sync] Syncing series files...");
				await runSync();
			},
			"astro:server:start": async () => {
				console.log("[series-sync] Syncing series files (dev)...");
				await runSync();
			},
		},
	};
}
