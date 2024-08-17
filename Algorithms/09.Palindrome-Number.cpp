// Source : https://leetcode.com/problems/palindrome-number/
// Author : InitialH14 a.k.a Hadid
// Date   : 2024-08-14

/**********************************************************************
Given an integer x, return true if x is a palindrome, and false otherwise.

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
**********************************************************************/

class Solution {
public:
    bool isPalindrome(int x) {
        string numberInput = to_string(x);
        string reverseNum = "";
        for (int i = (numberInput.length() - 1); i >= 0; i--) {
            reverseNum += numberInput[i];
        }

        if (numberInput == reverseNum) {
            return true;
        } else {
            return false;
        }
    }
};
