// Source : https://leetcode.com/problems/two-sum/
// Author : InitialH14 a.k.a Hadid
// Date   : 2024-08-14

/**********************************************************************
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
**********************************************************************/

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> numOutput;
        for(int i = 0;i < nums.size();i++){
            for(int j = (i+1); j < nums.size(); j++) {
                int result = nums[i] + nums[j];
                if(result == target){
                    numOutput.push_back(i);
                    numOutput.push_back(j);
                }
            }
        }
        return numOutput;
    }
};
