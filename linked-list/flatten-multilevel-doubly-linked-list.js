/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return head;
    
    let node = head;
    while (node.next && !node.child) {
        node = node.next;
    }
    
    if (!node.child) return head; // return if no child and reached the end.
    
    let nextHolder = node.next;
    node.child.prev = node;
    node.next = flatten(node.child);
    node.child = null;
    
    while (node.next) {
        node = node.next;
    }
    
    if (nextHolder) nextHolder.prev = node;
    node.next = flatten(nextHolder);
        
    return head;
};