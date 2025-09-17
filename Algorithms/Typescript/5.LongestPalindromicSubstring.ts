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
