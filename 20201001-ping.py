from collections import deque

class RecentCounter:

    def __init__(self):
        self.queue = deque();

    def ping(self, t: int) -> int:
        q = self.queue
        while q and q[0] < t - 3000:
            q.popleft()
        q.append(t)
        return len(q)