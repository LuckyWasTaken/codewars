/* In this little assignment you are given a string of space separated numbers,
 and have to return the highest and lowest number. */

"use strict";
function highAndLow(numbers) {
    numbers = numbers.split(" ").map((x) => parseInt(x));
    return Math.max(...numbers) + " " + Math.min(...numbers);
}