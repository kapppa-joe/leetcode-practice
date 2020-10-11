class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        if not s:
            return ""

        last_pos = {}
        taken = set()
        result = []

        for i, char in enumerate(s):
            last_pos[char] = i

        for i, char in enumerate(s):
            if char in taken:
                continue
            while (result and result[-1] > char and last_pos[result[-1]] > i):
                taken.remove(result.pop())
            result.append(char)
            taken.add(char)

        return ''.join(result)