from typing import List 

class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        if not nums:
            return False
        low = 0
        high = len(nums) - 1
        while low <= high:
            mid = (low + high) // 2
            if nums[mid] == target:
                return True

            elif nums[low] < nums[mid]:
                # left half is sorted
                if nums[low] <= target < nums[mid]:
                    high = mid - 1
                else:
                    low = mid + 1

            elif nums[high] > nums[mid]:
                # right half is sorted
                if nums[mid] < target <= nums[high]:
                    low = mid + 1
                else:
                    high = mid - 1

            elif nums[low] == nums[mid]:
                low += 1
            elif nums[high] == nums[mid]:
                high -= 1
            else:
                # if arrive here, the original array is not sorted,
                # i.e. the input array is invalid
                raise Exception("input array is invalid")

        return False

fn = Solution().search
