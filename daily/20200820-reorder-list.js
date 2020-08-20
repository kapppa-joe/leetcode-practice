/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return head;

    let arr = [];
    for (let node = head; node !== null; node = node.next) {
        arr.push(node);
    }

    let node = arr.shift();
    while (arr.length >= 2) {
        node.next = arr.pop();
        node = node.next;
        node.next = arr.shift();
        node = node.next;
    }
    if (arr.length > 0) {
        node.next = arr.pop();
        node = node.next;
    }
    node.next = null;
};