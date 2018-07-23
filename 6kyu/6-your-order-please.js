/* Your task is to sort a given string. Each word in the String will contain a single number.
 This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only
 contain valid consecutive numbers. */

"use strict";
function order(words) {
    return words.split(" ").sort((a,b) => {
        return parseInt(/\d/.exec(a) - /\d/.exec(b)); //Actually I noticed this parenthesis mismatch after submitting final solution. Still works for some reason o_O
    }).join(" ");
}