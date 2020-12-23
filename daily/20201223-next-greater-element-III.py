class Solution:
    def nextGreaterElement(self, n: int) -> int:
        s = [c for c in str(n)]
        pivot = -1
        last_pos = {}    # record the last pos of each digit

        for i in range(len(s) - 1, 0, -1):
            if int(s[i]) not in last_pos:
                last_pos[int(s[i])] = i
            if s[i-1] < s[i]:
                pivot = i-1
                break

        #print(f'pivot: {pivot}')
        if pivot == -1:
            # if pivot not found, then the str is the last permutation
            return -1

        swap = pivot + 1
        for i in range(int(s[pivot]) + 1, 10):
            if i in last_pos:
                swap = last_pos[i]
                break
        #print(f'swap: {swap}')

        s[swap], s[pivot] = s[pivot], s[swap]
        s = s[:pivot + 1] + sorted(s[pivot + 1:])

        res = int(''.join(s))
        if res >= (1 << 31):
            return -1
        else:
            return res


fn = Solution().nextGreaterElement
