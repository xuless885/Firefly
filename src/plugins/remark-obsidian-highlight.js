/**
 * remark-obsidian-highlight
 * 将 Obsidian 风格的 ==高亮文本== 转换为 <mark> 标签
 */
import { findAndReplace } from "mdast-util-find-and-replace";

export function remarkObsidianHighlight() {
  return (tree) => {
    findAndReplace(tree, [
      [
        /==(.+?)==/g,
        (_match, text) => ({
          type: "html",
          value: `<mark>${text}</mark>`,
        }),
      ],
    ]);
  };
}
