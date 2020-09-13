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
// Recursive. I love recursive :)
var postorderTraversal = function(root) {
    let result = [];

    const postOrderRecur = (node) => {
        if (!node) return;
        postOrderRecur(node.left);
        postOrderRecur(node.right);
        result.push(node.val);
    }

    postOrderRecur(root);
    return result;
}

/*  Iterate, reverse order. 
var postorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let node = root;
    stack.push(node)

    while (stack.length !== 0 || node) {
        node = stack.pop();
        if (node) result.push(node.val);
        if (node && node.left) stack.push(node.left);
        if (node && node.right) stack.push(node.right);
    }

    return result.reverse();
};
*/

/*  Iterate, non-reverse order
var postorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let node = root;

    while (stack.length !== 0 || node) {
        while (node) {
            if (node.right) stack.push(node.right);
            stack.push(node);
            node = node.left;
        }
        
        node = stack.pop();
        if (stack.length > 0 && stack[stack.length - 1] === node.right) {
            stack.pop();
            stack.push(node);
            node = node.right;
        } else {
            result.push(node.val);
            node = null;
        }
    }
    return result;
};
*/

