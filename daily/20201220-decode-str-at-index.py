class Solution:
    def decodeAtIndex(self, S: str, K: int) -> str:
        size = 0
        for c in S:
            if c.isdigit():
                size *= int(c)
            else:
                size += 1

        for c in reversed(S):
            K = K % size
            if c.isdigit():
                size /= int(c)
            elif K == 0:
                return c
            else:
                size -= 1

fn = Solution().decodeAtIndex
