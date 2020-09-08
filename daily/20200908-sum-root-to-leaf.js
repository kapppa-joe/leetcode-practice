/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let nums = [];

    let dfs = (node, prefix = "") => {
        if (!node) return;
        if (node.left || node.right) {
            dfs(node.left, prefix + node.val);
            dfs(node.right, prefix + node.val);
        } else {
            nums.push(prefix + node.val)
        }
    }
    dfs(root);

    return nums.map(n => parseInt(n, 2)).reduce((sum, i) => sum + i, 0);
};