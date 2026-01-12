#question
#find length of last word in a string
#answer
class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        s=s.rstrip()
        last=s.split()[-1]
        return len(last)
        