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
/* recursive;
var inorderTraversal = function(root) {
    if (!root) return [];

    let result = [];

    const inorderRecur = (root) => {
        if (!root) return;
        if (root.left) inorderRecur(root.left);
        result.push(root.val);
        if (root.right) inorderRecur(root.right);
    }

    inorderRecur(root);
    return result;
}; */

// iterate;
var inorderTraversal = function(root) {
    if (!root) return [];

    let result = [];
    let stack = [];
    let node = root;

    while (stack.length > 0 || node !== null) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        result.push(node.val);
        node = node.right;
    }
    return result;
};