# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        if not head or not head.next or not head.next.next:
            return None
        slow = head.next
        fast = head.next.next

        while fast and slow != fast:
            slow = slow.next
            fast = fast.next
            if fast:
                fast = fast.next

        if not fast:   # end at None, no cycle found.
            return None

        slow = head
        while slow != fast:
            slow = slow.next
            fast = fast.next

        return slow
