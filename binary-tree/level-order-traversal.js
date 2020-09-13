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
 * @return {number[][]}
 */
/* recursive
var levelOrder = function(root) {
    let result = [];

    const levelOrder = (node, level) => {
        if (!node) return;

        if (result[level]) {
            result[level].push(node.val);
        } else {
            result[level] = [node.val];
        }
        levelOrder(node.left, level + 1);
        levelOrder(node.right, level + 1);
    }

    levelOrder(root, 0);

    return result;
};
*/
// Iterate
var levelOrder = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [];
    let node = root;
    let size = 0;
    queue.push(node);

    while (queue.length > 0) {
        size = queue.length;
        let level = [];

        for (let i = 0; i < size; i++) {
            node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }

    return result;
};
