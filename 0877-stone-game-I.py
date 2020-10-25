from typing import List

class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        n = len(piles)

        # dp: score of optimal game with rng i to j-1
        #     denote as Alex's score - Lee's score
        dp = {}

        def game(i: int, j: int) -> int:
            if i >= j:
                return 0
            elif i in dp and j in dp[i]:
                return dp[i][j]
            elif (j - i) % 2 == 1:
                # Lee's turn, he wants to minimize the score
                best_move = min(game(i + 1, j) - piles[i],
                                game(i, j - 1) - piles[j - 1])
                dp.setdefault(i, {})[j] = best_move
                return best_move
            else:
                # Alex's turn, he wants to maximize the score
                best_move = max(piles[i] + game(i + 1, j),
                                piles[j - 1] + game(i, j - 1))
                dp.setdefault(i, {})[j] = best_move
                return best_move
        
        return game(0, n) > 0

fn = Solution().stoneGame
