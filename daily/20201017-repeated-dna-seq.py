from typing import List

class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        seen = set()
        result = []

        for i in range(len(s) - 9):
            dna = s[i:i+10]
            if dna in seen:
                if dna not in result:
                    result.append(dna)
            seen.add(dna)
        
        return result

    def findRepeatedDnaSequences2(self, s: str) -> List[str]:
        # leetcode related topic has "bit manipulation", so try to use some bit

        if len(s) < 10:
            return []

        seen = set()
        result = []
        genes = 'ACGT'
        to_bit = {gene: idx for idx, gene in enumerate(genes)}
        bit = 0
        upper_cap = 4 ** 10 - 1

        for c in s[:9]:
            bit = bit << 2
            bit += to_bit[c]

        for c in s[9:]:
            bit = (bit << 2) & upper_cap
            bit += to_bit[c]
            if bit in seen:
                if bit not in result:
                    result.append(bit)
            seen.add(bit)

        def bit_to_str(bit: int) -> str:
            result = []
            for i in range(10):
                result.append(genes[bit & 3])
                bit = bit >> 2
            return ''.join(reversed(result))
       
        return [bit_to_str(bit) for bit in result]

fn = Solution().findRepeatedDnaSequences