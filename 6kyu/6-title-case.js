/* Write a function that will convert a string into title case, given an optional
 list of exceptions (minor words). The list of minor words will be given as a string
 with each word separated by a space. Your function should ignore the case of the minor
 words string -- it should behave in the same way even if the case of the minor word string
 is changed. */

"use strict";
function titleCase(title, minorWords = "") {
    minorWords = minorWords.toLowerCase().split(" ");
    return title.split(" ").map((s, i) => {
        if (i !== 0 && minorWords.indexOf(s.toLowerCase()) !== -1) {
            return s.toLowerCase();
        }
        return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();
    }).join(" ");
}