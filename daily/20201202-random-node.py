from random import randint

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:

    def __init__(self, head: ListNode):
        """
        @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
        """
        self.head = head
        self.pool = []
        while head:
            self.pool.append(head.val)
            head = head.next


    def getRandom(self) -> int:
        idx = randint(0, len(self.pool) - 1)
        return self.pool[idx]

    def getRandom_rs(self) -> int:
        """
        Returns a random node's value.
        Use reservoir sampling
        """
        result = self.head.val
        i = 1
        node = self.head
        while node:
            if randint(1, i) == 1:
                result = node.val
            node = node.next
            i += 1
        return result



# Your Solution object will be instantiated and called as such:
# obj = Solution(head)
# param_1 = obj.getRandom()