class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        if len(arr) < 3:
            return False
        elif arr[0] >= arr[1]:
            return False

        go_down = False
        prev = arr[0]

        for k in arr[1:]:
            if k == prev:
                return False
            elif not go_down:
                if k < prev:
                    go_down = True
            else:
                if k > prev:
                    return False
            prev = k

        return go_down
