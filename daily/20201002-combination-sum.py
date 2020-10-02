from typing import List

class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        n = len(candidates)
        candidates.sort()
        results: List[List[int]]= [];
        v: List[int] = [];

        def build(i: int, remain: int):
            if remain == 0:
                results.append(v[:])
                return
            if i == n or remain < 0 or candidates[i] > remain:
                return

            v.append(candidates[i])
            take = build(i, remain - candidates[i])
            v.pop()

            skip = build(i + 1, remain)

        build(0, target)
        return results

# s = Solution()
# print(len(s.combinationSum([1,2,5,10,20,50,100,200], 200)))