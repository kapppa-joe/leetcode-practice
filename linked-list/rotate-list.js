/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {   // eslint-disable-line no-unused-vars
    if (!head || !head.next || k === 0) return head;

    let i = 1;
    let node = head;

    while (node && node.next) {
        node = node.next;
        i++;
    }

    k = k % i;
    if (k === 0) return head; // if k % length = 0, no need rotation.

    node.next = head; // connect last node to head;    
    node = head;      // rewind
    let breakPoint = i - k - 1;    
 
    for (i = 0; i < breakPoint; i++) {
        node = node.next;
    }

    let newHead = node.next;
    node.next = null;

    return newHead;
};