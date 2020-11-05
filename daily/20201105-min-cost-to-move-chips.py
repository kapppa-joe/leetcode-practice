class Solution:
    def minCostToMoveChips(self, position: List[int]) -> int:
        n = len(position)
        even = sum(1 for i in position if i % 2 == 0)
        return min(even, n - even)
