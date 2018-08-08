// https://www.codewars.com/kata/longest-palindrome

"use strict";
function longestPalindrome(s) {
    return isPali(s)
        ? s.length
        : Math.max(longestPalindrome(s.substr(0, s.length -1)),
            longestPalindrome(s.substr(1, s.length)));
}

const isPali = (s) => s === s.split("").reverse().join("");