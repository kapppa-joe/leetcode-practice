# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def split(head: ListNode) -> (ListNode, ListNode):
    fast = head.next
    slow = head
    while fast:
        fast = fast.next
        if fast:
            slow = slow.next
            fast = fast.next
    second_half = slow.next
    slow.next = None
    return (head, second_half)


def merge(p, q: ListNode) -> ListNode:
    if not p or not q:
        return p or q

    if p.val <= q.val:
        head = p
        head.next = merge(p.next, q)
    else:
        head = q
        head.next = merge(p, q.next)

    return head

class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        (p, q) = split(head)
        p = self.sortList(p)
        q = self.sortList(q)
        return merge(p, q)