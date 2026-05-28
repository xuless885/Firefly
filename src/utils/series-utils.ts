import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import matter from "gray-matter";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SeriesConfig {
	defaultChapter?: string;
	sync?: {
		source: string;
	};
}

export interface ChapterInfo {
	/** URL slug (filename without extension) */
	slug: string;
	/** Display title (from frontmatter or fallback to slug) */
	title: string;
	/** Path relative to series data folder */
	relativePath: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SERIES_ROOT = path.join(
	process.cwd(),
	"src",
	"content",
	"posts",
	"Sets_of_doc",
);

const CHAPTER_EXTENSIONS = [".md", ".mdx"];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Check if an Astro content entry id represents a series entry.
 * Series entries have ids like "Sets_of_doc/<series-name>/index.md"
 */
export function isSeriesEntry(id: string): boolean {
	return /^sets_of_doc\/[^/]+\/index\.(md|mdx)$/i.test(id);
}

/**
 * Extract the series folder name from a series entry id.
 * "Sets_of_doc/dse-ch0/index.md" → "dse-ch0"
 */
export function getSeriesFolderName(id: string): string {
	const match = id.match(/^sets_of_doc\/([^/]+)\/index\.(md|mdx)$/i);
	return match ? match[1] : "";
}

/**
 * Get the full filesystem path to a series folder.
 */
export function getSeriesDir(seriesFolder: string): string {
	return path.join(SERIES_ROOT, seriesFolder);
}

/**
 * Read and parse the series.yaml config file.
 */
export function getSeriesConfig(seriesFolder: string): SeriesConfig {
	try {
		const configPath = path.join(
			SERIES_ROOT,
			seriesFolder,
			"series.yaml",
		);
		if (!fs.existsSync(configPath)) {
			return {};
		}
		const raw = fs.readFileSync(configPath, "utf-8");
		return (yaml.load(raw) as SeriesConfig) || {};
	} catch {
		return {};
	}
}

// ---------------------------------------------------------------------------
// Chapter listing
// ---------------------------------------------------------------------------

/**
 * Find the exact filename for a chapter by its slug (name without extension).
 * Supports nested paths like "subdir/chapter".
 */
export function findChapterFile(
	seriesFolder: string,
	chapterSlug: string,
): string | null {
	const normalizedSlug = chapterSlug.replace(/\\/g, "/");

	for (const ext of CHAPTER_EXTENSIONS) {
		const candidate = path.join(
			SERIES_ROOT,
			seriesFolder,
			`${normalizedSlug}${ext}`,
		);
		if (fs.existsSync(candidate)) {
			return candidate;
		}
	}
	return null;
}

/**
 * Recursively collect all chapter files in a directory,
 * excluding index.md/index.mdx and series.yaml.
 */
function collectChapters(dir: string, baseDir: string): string[] {
	const result: string[] = [];
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			result.push(...collectChapters(fullPath, baseDir));
		} else if (entry.isFile()) {
			const ext = path.extname(entry.name).toLowerCase();
			const basename = path.basename(entry.name, ext);

			// Skip special files
			if (basename === "index" || entry.name === "series.yaml") {
				continue;
			}
			if (CHAPTER_EXTENSIONS.includes(ext)) {
				const relPath = path
					.relative(baseDir, fullPath)
					.replace(/\\/g, "/");
				result.push(relPath);
			}
		}
	}
	return result;
}

/**
 * Sort chapter paths by filename prefix (natural sort).
 */
function sortChapterPaths(paths: string[]): string[] {
	return paths.sort((a, b) => {
		return a.localeCompare(b, undefined, {
			numeric: true,
			sensitivity: "base",
		});
	});
}

/**
 * Extract the title from a chapter file's frontmatter.
 * Falls back to the filename slug if no title is found.
 */
function extractChapterTitle(
	seriesFolder: string,
	relPath: string,
): string {
	const fullPath = path.join(SERIES_ROOT, seriesFolder, relPath);
	try {
		const raw = fs.readFileSync(fullPath, "utf-8");
		const { data } = matter(raw);
		return data.title || slugFromPath(relPath);
	} catch {
		return slugFromPath(relPath);
	}
}

function slugFromPath(relPath: string): string {
	// Remove extension, then take the last segment
	const withoutExt = relPath.replace(/\.(md|mdx)$/i, "");
	return withoutExt.split("/").pop() || withoutExt;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Get all chapters for a series, sorted by filename, with titles.
 */
export function getSeriesChapters(seriesFolder: string): ChapterInfo[] {
	const dataDir = path.join(SERIES_ROOT, seriesFolder);
	if (!fs.existsSync(dataDir)) {
		return [];
	}

	const paths = collectChapters(dataDir, dataDir);
	const sorted = sortChapterPaths(paths);

	return sorted.map((relPath) => {
		const ext = path.extname(relPath);
		const slug = relPath.slice(0, -ext.length);
		const title = extractChapterTitle(seriesFolder, relPath);

		return {
			slug,
			title,
			relativePath: relPath,
		};
	});
}

/**
 * Get the resolved chapter slug, accounting for defaultChapter config.
 * Returns null if no chapters exist.
 */
export function resolveChapter(
	seriesFolder: string,
	requestedChapter?: string,
): { slug: string; filePath: string } | null {
	const chapters = getSeriesChapters(seriesFolder);
	if (chapters.length === 0) return null;

	let targetChapter = requestedChapter;
	if (!targetChapter) {
		const config = getSeriesConfig(seriesFolder);
		targetChapter = config.defaultChapter;
	}
	if (!targetChapter) {
		// Fallback to first chapter
		targetChapter = chapters[0].slug;
	}

	// Try to find exact match
	const exactMatch = chapters.find((c) => c.slug === targetChapter);
	if (exactMatch) {
		const filePath = findChapterFile(seriesFolder, exactMatch.slug);
		return filePath
			? { slug: exactMatch.slug, filePath }
			: null;
	}

	// Fallback to first chapter
	const filePath = findChapterFile(seriesFolder, chapters[0].slug);
	return filePath
		? { slug: chapters[0].slug, filePath }
		: null;
}

/**
 * Get previous and next chapters for navigation.
 */
export function getChapterNav(
	chapters: ChapterInfo[],
	currentSlug: string,
): { prev: ChapterInfo | null; next: ChapterInfo | null } {
	const idx = chapters.findIndex((c) => c.slug === currentSlug);
	return {
		prev: idx > 0 ? chapters[idx - 1] : null,
		next: idx < chapters.length - 1 ? chapters[idx + 1] : null,
	};
}
