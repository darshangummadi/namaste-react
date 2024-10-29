class Solution:
    def canConstruct(self, ransomeNote: str, magazine: str) -> bool:
        counter = {}
        for c in magazine:
            if c in counter:
                counter[c] += 1
            else:
                counter[c] = 1
        
        for c in ransomeNote:
            if c not in counter:
                return False
            elif counter[c] == 1:
                del counter[c]
            else:
                counter[c] -= 1
        return True
solution = Solution()
kill = solution.canConstruct(ransomeNote='aa',magazine='ab')
print(kill)