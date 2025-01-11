// Source : https://leetcode.com/problems/construct-k-palindrome-strings
// Author : InitialH14 a.k.a Hadid
// Date   : 2024-08-14

/**********************************************************************
Given a string s and an integer k, return true if you can use all the characters in s to 
construct k palindrome strings or false otherwise.

Example:
Input: s = "annabelle", k = 2
Output: true
Explanation: You can construct two palindromes using all characters in s.
Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"
**********************************************************************/

var canConstruct = function(s, k) {
    if(s.length == k) {
        return true;
    } else if(s.length < k){
        return false;
    }

    let freq = {};
    var oddCount = 0;

    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let key in freq) {
        if (freq[key] % 2 === 1) {
            oddCount++;
        }
    }

    return oddCount <= k;
};
