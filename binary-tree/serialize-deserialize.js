/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return "X,";
    return root.val + ',' + serialize(root.left) + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = data.split(',').reverse();

    const build = (arr) => {
        let val = arr.pop();
        if (val === 'X' || val === undefined) {
            return null;
        } else {
            let node = new TreeNode(val);
            node.left = build(arr);
            node.right = build(arr)
            return node;
        }
    }

    return build(arr);
};

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        if (val === undefined) return null;
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 const Tree = require('./make-test-case');
 let t = Tree.fromArray([0,1,2,3,null,4,5,null,6,7]);
 let t2 = deserialize(serialize(t));
 console.log(serialize(t).split(','));
 console.log(t2.right);