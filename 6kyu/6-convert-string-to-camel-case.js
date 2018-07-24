/* Complete the method/function so that it converts dash/underscore delimited words into
 camel casing. The first word within the output should be capitalized only if the original
  word was capitalized. */
"use strict";
function toCamelCase(str){
    return str.split(/[-_]/).map((str, i) => {
        return i === 0
            ? str
            : str.charAt().toUpperCase() + str.slice(1);
    }).join("");
}