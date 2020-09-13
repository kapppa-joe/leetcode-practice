/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let hash = {};
    let pre = preorder.reverse();
    for (let i = 0; i < inorder.length; i++) {
        hash[inorder[i]] = i;
    }

    const build = (start, end) => {
        if (start > end) return null;

        let val = pre.pop();
        let node = new TreeNode(val);
        node.left = build(start, hash[val] - 1);
        node.right = build(hash[val] + 1, end);
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
