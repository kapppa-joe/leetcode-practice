class Solution:
    def calculate(self, s: str) -> int:
        nums = []
        ops = []
        operators = ["+", "-", "*", "/"]

        num = 0
        for c in s:
            if c.isdigit():
                num = num * 10 + int(c)
            elif c in operators:
                nums.append(num)
                num = 0
                ops.append(c)
        nums.append(num)

        ops.reverse()
        nums.reverse()

        num_stack = [nums.pop()]
        while ops:
            op = ops.pop()
            num = nums.pop()
            if op == "*":
                num = num_stack.pop() * num
            elif op == "/":
                prev = num_stack.pop()
                if prev < 0:
                    num = (abs(prev) // num) * -1
                else:
                    num = prev // num
            elif op == "-":
                num = -num
            num_stack.append(num)
             
        return sum(num_stack)

fn = Solution().calculate
