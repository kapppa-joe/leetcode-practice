from typing import List

class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for elem in asteroids:
            if not stack or elem > 0:
                stack.append(elem)
            elif elem < 0:
                stack = self.collision(stack, elem)
            else:
                raise ValueError('asteroid[i] must not be zero')

        return stack

    def collision(self, stack: List[int], right: int) -> List[int]:
        while stack:
            if stack[-1] < 0:
                return stack + [right]
            else:
                left = stack.pop()
                aftermath = left + right
                if aftermath == 0:
                    return stack
                elif aftermath > 0:
                    return stack + [left]
                else:
                    continue

        return [right]



fn = Solution().asteroidCollision
