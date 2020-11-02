from typing import List

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def insertionSortList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        node = head.next
        newHead = head
        newHead.next = None

        while node:
            next = node.next
            if node.val < newHead.val:
                node.next = newHead
                newHead = node
            else:
                curr = newHead
                while curr.next and curr.next.val < node.val:
                    curr = curr.next
                node.next = curr.next
                curr.next = node
            node = next

        return newHead

n1 = ListNode(1)
n0 = ListNode(0)
n1.next = n0

fn = Solution().insertionSortList
fn(n1)