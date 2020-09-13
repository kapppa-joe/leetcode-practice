/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;

    let ans = null;
    const traverse = (node) => {
        if (!node) return false;
        let curr = node === p || node === q;
        let left = traverse(node.left);
        let right = traverse(node.right);

        if ((left && right) || (curr && (left || right))) {
            ans = node;
        }

        return curr || left || right;
    }

    traverse(root);
    return ans;
};