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
