# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:

        def extract_num(node: ListNode) -> int:
            num = 0
            while node:
                num = num * 10 + node.val
                node = node.next
            return num

        def to_node(num: int) -> ListNode:
            if num == 0:
                return ListNode(0)
            else:
                node = None
                while num > 0:
                    node = ListNode(num % 10, node)
                    num = num // 10
                return node

        n1, n2 = (extract_num(lst) for lst in (l1, l2))
        return to_node(n1 + n2)

fn = Solution().addTwoNumbers
