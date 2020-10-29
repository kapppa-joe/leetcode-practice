from math import inf

class Solution:
    def maxDistToClosest(self, seats: List[int]) -> int:
        dist = [0] * len(seats)

        count = inf
        for i in range(len(seats)):
            if seats[i] == 1:
                count = 0
            else:
                count += 1
            dist[i] = count

        count = inf
        max_dist = 0
        for i in range(len(seats) - 1, -1, -1):
            if seats[i] == 1:
                count = 0
            else:
                count += 1
            dist[i] = min(dist[i], count)
            max_dist = max(max_dist, dist[i])

        return max_dist

