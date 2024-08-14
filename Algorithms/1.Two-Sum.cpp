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
