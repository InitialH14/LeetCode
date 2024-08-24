// Source : https://leetcode.com/problems/roman-to-integer
// Author : InitialH14 a.k.a Hadid
// Date   : 2024-08-17

/**********************************************************************
Given a roman numeral, convert it to an integer.

Example:
Input: s = "III"
Output: 3
Explanation: III = 3.
**********************************************************************/

class Solution {
public:
    int romanToInt(string s) {
        int total = 0;
        for(int i = 0; i < s.length(); i++){
             if(i + 1 < s.length()){ 
            if(s[i] == 'I' && s[i+1] == 'V'){
                total += 4;
                i++; 
            } else if(s[i] == 'I' && s[i+1] == 'X'){
                total += 9;
                i++;
            } else if(s[i] == 'X' && s[i+1] == 'L'){
                total += 40;
                i++;
            } else if(s[i] == 'X' && s[i+1] == 'C'){
                total += 90;
                i++;
            } else if(s[i] == 'C' && s[i+1] == 'D'){
                total += 400;
                i++;
            } else if(s[i] == 'C' && s[i+1] == 'M'){
                total += 900;
                i++;
            } else {
                if(s[i] == 'I'){
                    total += 1;
                } else if(s[i] == 'V'){
                    total += 5;
                } else if(s[i] == 'X'){
                    total += 10;
                } else if(s[i] == 'L'){
                    total += 50;
                } else if(s[i] == 'C'){
                    total += 100;
                } else if(s[i] == 'D'){
                    total += 500;
                } else if(s[i] == 'M'){
                    total += 1000;
                }
            }
        } else { 
            if(s[i] == 'I'){
                total += 1;
            } else if(s[i] == 'V'){
                total += 5;
            } else if(s[i] == 'X'){
                total += 10;
            } else if(s[i] == 'L'){
                total += 50;
            } else if(s[i] == 'C'){
                total += 100;
            } else if(s[i] == 'D'){
                total += 500;
            } else if(s[i] == 'M'){
                total += 1000;
            }
        }
        }

        return total;
    }
};
