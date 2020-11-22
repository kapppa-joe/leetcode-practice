from string import ascii_lowercase
from typing import List

MorseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
MorseDict = {ascii_lowercase[i]: MorseCode[i] for i in range(26)}

class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        s = set()
        for word in words:
            s.add(''.join(MorseDict[char] for char in word))
        
        return len(s)

fn = Solution().uniqueMorseRepresentations
