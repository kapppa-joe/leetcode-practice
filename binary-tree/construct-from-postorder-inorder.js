/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    let hash = {};
    for (let i = 0; i < inorder.length; i++) {
        hash[inorder[i]] = i
    }

    const build = (start, end) => {
        if (start > end) return null;

        let val = postorder.pop();
        let node = new TreeNode(val);
        node.right = build(hash[val] + 1, end);
        node.left = build(start, hash[val] - 1);
        return node;
    }

    return build(0, inorder.length - 1);
};


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        if (val === undefined) return null;
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
