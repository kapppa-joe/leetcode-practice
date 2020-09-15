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
var rob = function(root) {

    const dp = (node) => {
        if (!node) return [0, 0];
        if (!node.left && !node.right) return [node.val, 0];

        let dpLeft = dp(node.left);
        let dpRight = dp(node.right);
        let robThis = node.val + dpLeft[1] + dpRight[1];
        let skipThis = Math.max(...dpLeft) + Math.max(...dpRight);
        return [robThis, skipThis];
    }

    return Math.max(...dp(root))
};