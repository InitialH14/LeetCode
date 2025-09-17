// My Submission : https://leetcode.com/problems/longest-palindromic-substring/submissions/1773893423
// Author : InitialH14 a.k.a Hadid
// Date   : 2025-09-17

/**********************************************************************
Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
**********************************************************************/

function longestPalindrome(s: string): string {
    if (s.length == 0) return "";

    let result: string = "";
    let maxLength: number = 0;

    function expandCenter(s: string, left: number, right: number): string{
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
        }

        return s.slice(left+1, right);
    }

    for(let i: number = 0; i < s.length; i++){
        const palindrome1 = expandCenter(s, i, i);
        const palindrome2 = expandCenter(s, i, i+1);

        const longerPalindrome = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;

        if(longerPalindrome.length > maxLength){
            result = longerPalindrome;
            maxLength = longerPalindrome.length;
        }
    }

    return result;
};
