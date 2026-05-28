/**
 * remark-obsidian-comments
 * 移除 Obsidian 风格的 %%注释%% 语法（单行和多行均支持）
 */
import { findAndReplace } from "mdast-util-find-and-replace";

export function remarkObsidianComments() {
  return (tree) => {
    findAndReplace(tree, [
      // 单行注释: %% ... %%
      [/%%.+?%%/g, ""],
      // 多行注释: %%\n...\n%%
      [/%%.+?%%/gs, ""],
    ]);
  };
}
