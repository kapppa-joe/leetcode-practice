from typing import List
from itertools import combinations

class Solution:
    def validSquare(self, p1: List[int], p2: List[int], p3: List[int], p4: List[int]) -> bool:
        ## check the diff of all combination of 4 points.
        ## if it is a square, it should give 2 equal diagonals and 4 equal sides.

        def square_of_dist(a: List[int], b: List[int]) -> int:
            return (b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2

        distances = []
        for (a, b) in combinations([p1, p2, p3, p4], 2):
            distances.append(square_of_dist(a, b))
        
        distances.sort()
        print(distances)
        side = distances[0]
        if side == 0:
            return False    # reject the case of a single point
        diagonal = distances[5]

        return all(d == side for d in distances[1:4]) and (distances[4] == diagonal)

fn = Solution().validSquare
