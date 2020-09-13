/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root;

    if (root.left && root.right) {
        root.left.next = root.right;
    }
    if (root.left || root.right) {
        let toConnect = root.right ? root.right : root.left;
        let next = root.next;
        while (next) {
            if (next.left) {
                toConnect.next = next.left;
            } else if (next.right) {
                toConnect.next = next.right;
            } else {
                next = next.next;
            }
        }
    }

    root.right = connect(root.right);
    root.left = connect(root.left);

    return root;
};