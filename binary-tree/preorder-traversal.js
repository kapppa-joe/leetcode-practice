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
 * @return {number[]}
 */
/* Recursive
var preorderTraversal = function(root) {
    if (!root) return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};
*/
// Iterate
var preorderTraversal = function(root) { // eslint-disable-line no-unused-vars
    if (!root) return [];

    let result = [];
    let stack = [root];

    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
};