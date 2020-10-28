class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if not nums:
            return []

        rng = []
        low = nums[0]
        curr = low

        for v in nums[1:]:
            if curr + 1 == v:
                curr = v
            else:
                if curr == low:
                    rng.append(low)
                else:
                    rng.append((low, curr))
                low = v
                curr = v

        if low == curr:
            rng.append(low)
        else:
            rng.append((low, curr))

        return [f'{v[0]}->{v[1]}' if type(v) == tuple else str(v) 
                for v in rng]
