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
