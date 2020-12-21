class Solution:
    def smallestRangeII(self, A: List[int], K: int) -> int:
        if len(A) == 1:
            return 0

        arr = sorted(A)
        diff = arr[-1] - arr[0]
        left = arr[0] + K
        right = arr[-1] - K
        for i in range(len(arr) - 1):
            high = max(right, arr[i] + K)
            low = min(left, arr[i + 1] - K)
            diff = min(diff, high - low)

        return diff

fn = Solution().smallestRangeII
