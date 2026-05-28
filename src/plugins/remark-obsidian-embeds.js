/**
 * remark-obsidian-embeds
 * Strips the Obsidian embed prefix "!" from ![[...]] links
 * so @portaljs/remark-wiki-link can process them normally.
 * Must run BEFORE wikiLinkPlugin in the pipeline.
 */
import { findAndReplace } from "mdast-util-find-and-replace";

export function remarkObsidianEmbeds() {
  return (tree) => {
    findAndReplace(tree, [
      [/(?<!!)!\[\[(.+?)\]\]/g, "[[$1]]"],
    ]);
  };
}
