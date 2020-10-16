class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix or not matrix[0]:
            return False

        i = 0
        j = len(matrix)

        while i <= j and i < len(matrix):
            mid = (i + j) // 2
            if target < matrix[mid][0]:
                j = mid - 1
                continue
            elif target > matrix[mid][-1]:
                i = mid + 1
                continue
            else:
                return target in matrix[mid]
        return False

    def searchMatrix2(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix or not matrix[0]:
            return False

        for row in matrix:
            if target < row[0] or target > row[-1]:
                continue
            elif target in row:
                return True
        return False
