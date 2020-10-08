# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        if not head:
            return head
        if k == 0:
            return head
        elif k < 0:
            return None

        node = head
        length = 1
        while node.next:
            node = node.next
            length += 1
        last = node
        k = k % length
        if k == 0:
            return head

        node = head
        for i in range(length - k - 1):
            node = node.next

        newHead = node.next
        node.next = None
        last.next = head
        return newHead
