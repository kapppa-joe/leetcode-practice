class Solution:
    def decodeString(self, s: str) -> str:
        num = 0
        res = ""
        n_stack = []
        s_stack = []

        for c in s:
            if c.isdigit():
                num = num * 10 + int(c)
            elif c.isalpha():
                res += c
            elif c == "[":
                n_stack.append(num)
                num = 0
                s_stack.append(res)
                res = ""
            elif c == "]":
                res = s_stack.pop() + n_stack.pop() * res

        return res

fn = Solution().decodeString
