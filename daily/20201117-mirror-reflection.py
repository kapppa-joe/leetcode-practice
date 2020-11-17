class Solution:
    def mirrorReflection(self, p: int, q: int) -> int:
        ## assume the mirror extend to right for inf dist
        ## when light reach upper wall, x dist = p * p / q
        ## the light hit a corner only when x = k * p for k = 1,2,3...

        y = 0
        for i in range(1, q + 1):
            y = 1 - y     # y is the vertical pos
            if (i * p) % q != 0: 
                continue  # if x is not multiple of p, bounce again

            k = i * p // q
            if k % 2 == 1:
                return y
            else:
                if y == 1: 
                    return 2
                else:
                    continue

fn = Solution().mirrorReflection
