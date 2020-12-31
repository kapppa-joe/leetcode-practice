from typing import List


class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        if not heights:
            return 0

        st = []
        max_area = 0

        for i in range(len(heights)):
            if not st or heights[st[-1]] <= heights[i]:
                st.append(i)
            else:
                while st and heights[st[-1]] > heights[i]:
                    h = heights[st.pop()]
                    lbound = -1 if not st else st[-1]
                    max_area = max(max_area, h * (i - lbound - 1))
                st.append(i)

        i = len(heights)
        while st:
            h = heights[st.pop()]
            lbound = -1 if not st else st[-1]
            max_area = max(max_area, h * (i - lbound - 1))

        return max_area

fn = Solution().largestRectangleArea
hist = [2,1,5,6,2,3]
fn(hist)