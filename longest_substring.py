class Solution(object):
    """Given a string, find the length of the longest substring without repeating characters."""
    def lengthOfLongestSubstring(self, str):
        """
        :type s: str
        :rtype: int
        """
        longest_substr = ''
        for i in range(0,len(str)):
            for j in range(i,len(str)):
                if str[i:j] in longest_substr:
                    i = j
                else:
                    longest_substr += str[]
