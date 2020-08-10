/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) { // eslint-disable-line no-unused-vars
    if (!head) return head;

    let clone = new Node();
    let cloneHead = clone;
    let node = head;

    while (node) {
        clone.next = new Node(node.val, null, node.random);
        node.clone = clone.next;
        node = node.next;
        clone = clone.next
    }

    clone = cloneHead.next;
    while (clone) {
        if (clone.random) {
            clone.random = clone.random.clone;
        }
        clone = clone.next;
    }

    return cloneHead.next;
};