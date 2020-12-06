class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if not flowerbed:
            return False
        elif n == 0:
            return True
        elif len(flowerbed) == 1:
            return n == 1 and flowerbed[0] == 0

        i = 0
        leng = len(flowerbed)
        while n > 0 and i < leng:
            if flowerbed[i] == 1:
                i += 2
            else:
                if i == leng - 1 or flowerbed[i + 1] == 0:
                    n -= 1
                    i += 2
                else:
                    i += 1

        return n == 0
