# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:

        def dfs(node: ListNode) -> ListNode:
            if not node or not node.next:
                return node
            else:
                new_tail = dfs(node.next.next)
                new_head = node.next
                node.next = new_tail
                new_head.next = node
                return new_head
        return dfs(head)