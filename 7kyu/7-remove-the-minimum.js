/* Given an array of integers, remove the smallest value. Do not mutate the original array/list.
If there are multiple elements with the same value, remove the one with a lower index.
If you get an empty array/list, return an empty array/list. */

'use strict';
function removeSmallest(numbers) {
    const output = numbers.slice();
    output.splice(numbers.indexOf(Math.min(...numbers)), 1);
    return output;
}

// Kind of dumb solution, I know. Could've done it without explicitly copying input.