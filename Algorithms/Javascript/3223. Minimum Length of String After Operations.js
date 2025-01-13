// Source : https://leetcode.com/problems/minimum-length-of-string-after-operations
// Author : InitialH14 a.k.a Hadid
// Date   : 2024-01-13

/**********************************************************************
You are given a string s.
You can perform the following process on s any number of times:
1. Choose an index i in the string such that there is at least one character to the left of index i that is equal to s[i], and at least one character to the right that is also equal to s[i].
2. Delete the closest character to the left of index i that is equal to s[i].
3. Delete the closest character to the right of index i that is equal to s[i].

Return the minimum length of the final string s that you can achieve.

Example 1:
Input: s = "abaacbcbb"
Output: 5

Explanation:
We do the following operations:
1. Choose index 2, then remove the characters at indices 0 and 3. The resulting string is s = "bacbcbb".
2. Choose index 3, then remove the characters at indices 0 and 5. The resulting string is s = "acbcb".

Example 2:
Input: s = "aa"
Output: 2

Explanation:
We cannot perform any operations, so we return the length of the original string.
**********************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const charFrequencyMap = {};
    for (const char of s) {
        charFrequencyMap[char] = (charFrequencyMap[char] || 0) + 1;
    }

    let deleteCount = 0;
    for (const frequency of Object.values(charFrequencyMap)) {
        if (frequency % 2 === 1) {
            deleteCount += frequency - 1;
        } else {
            deleteCount += frequency - 2;
        }
    }

    return s.length - deleteCount;
};
