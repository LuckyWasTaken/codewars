/* You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character. If the word's length is even,
return the middle 2 characters. */
'use strict';
function getMiddle(s) {
    const len = s.length;
    return len % 2 === 0
        ? s.slice(len / 2 - 1, len / 2 + 1)
        : s.charAt(len / 2);
}