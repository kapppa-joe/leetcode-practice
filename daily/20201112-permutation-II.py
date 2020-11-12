from typing import List

class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        res = []

        def dfs(arr: List[int], start: int):
            if start >= n:
                res.append(arr)
            else:
                for i in range(start, n):
                    if i > start and arr[i] == arr[start]:
                        continue
                    arr[i], arr[start] = arr[start], arr[i]
                    dfs(arr[:], start + 1)

        dfs(sorted(nums), 0)
        return res

fn = Solution().permuteUnique
