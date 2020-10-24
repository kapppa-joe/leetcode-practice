from typing import List
from collections import deque

class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        tokens = deque(sorted(tokens))
        score = 0

        while tokens:
            if power < tokens[0]:
                if score == 0 or len(tokens) < 2:
                    return score
                else:
                    power += tokens.pop()
                    score -= 1
            else:
                power -= tokens.popleft()
                score += 1
        
        return score
            
fn = Solution().bagOfTokensScore
