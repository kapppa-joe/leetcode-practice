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
 * @return {boolean}
 */
// recursive solution
var isSymmetric = function(root) {  // eslint-disable-line no-unused-vars
    return isMirror(root, root);
};

const isMirror = (nodeA, nodeB) => {
    if (!nodeA || !nodeB) return (!nodeA && !nodeB);
    return nodeA.val === nodeB.val && isMirror(nodeA.left, nodeB.right) && isMirror(nodeA.right, nodeB.left);
}

/* iterate solution
var isSymmetric = function(root) {
    if (!root) return true;

    const isPalindrome = (arr) => {
        for (let i = 0; i <= arr.length / 2; i ++) {
            if (arr[i] !== arr[arr.length - 1 - i]) return false
        }
        return true;
    }
    
    let queue = [];
    let node = root;
    queue.push(node);

    while (queue.length > 0) {
        let level = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node ? node.val : 'null');
            if (!node) continue;
            queue.push(node.left);
            queue.push(node.right);
        }
        console.log(level);
        if (!isPalindrome(level)) return false;
    }
    return true;
};
*/
