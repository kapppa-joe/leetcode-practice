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
var sumOfLeftLeaves = function(root) {
    let result = 0;

    const isLeaf = (node) => node && !node.left && !node.right;
    const recur = (node) => {
        if (!node) return;
        if (isLeaf(node.left)) {
            result += node.left.val;
        } else {
            recur(node.left);
        }
        recur(node.right);
    }

    recur(root);
    return result;
};