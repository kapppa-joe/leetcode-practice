/* eslint-disable no-unused-vars */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) { // eslint-disable-line no-unused-vars
    if (!l1) return handleCarryOver(l2);
    if (!l2) return handleCarryOver(l1);
    
    if (!l1.next || !l2.next) {
        let node = l1.next ? l1 : l2;
        node.val = l1.val + l2.val;
        return handleCarryOver(node);
    }

    l1.val = l1.val + l2.val;
    l1.next.val += parseInt(l1.val / 10);
    l1.val = l1.val % 10;
    l1.next = handleCarryOver(addTwoNumbers(l1.next, l2.next));
    return l1;
};

var handleCarryOver = function(node) {
    if (!node || node.val < 10) return node;
    
    if (!node.next) {
        node.next = new ListNode(parseInt(node.val / 10)); // eslint-disable-line no-undef
        node.val = node.val % 10;
    } else {
        node.next.val += parseInt(node.val / 10);
        node.val = node.val % 10;
        node.next = handleCarryOver(node.next);
    }
    return node;
}