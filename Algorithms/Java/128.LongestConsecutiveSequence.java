// My Submission : https://leetcode.com/problems/longest-consecutive-sequence/submissions/1770005082
// Author : InitialH14 a.k.a Hadid
// Date   : 2025-09-14

/**********************************************************************
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Example 3:
Input: nums = [1,0,1,2]
Output: 3
**********************************************************************/
import java.util.Arrays;

class Solution {
    public int longestConsecutive(int[] nums) {
        Arrays.sort(nums);
        int m = 0;
        int n = 0;

        for (int i = 0; i < nums.length; i++){
            if (i != 0){
                if((nums[i] - nums[i-1]) == 1){
                    n++;
                }
                else if ((nums[i] - nums[i-1]) == 0){
                    continue;
                }
                else {
                    if (m < n){
                        m = n;
                    }
                    n = 1;
                }
            } else {
                n++;
            }
        }

        if (m < n){
            m = n;
        }

        return m;
    }
}
