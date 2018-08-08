"use strict";
function bracesStatus(string) {
    const stack = [];
    let flag = true;
    string.split("").forEach(function(c) {
        switch (c) {
        case "(":
        case "{":
        case "[":
            stack.push(c);
            break;
        case ")":
            if (stack.pop() !== "(") {
                flag = false;
            }
            break;
        case "}":
            if (stack.pop() !== "{") {
                flag = false;
            }
            break;
        case "]":
            if (stack.pop() !== "[") {
                flag = false;
            }
            break;
        }
    });

    return stack.length === 0 && flag;
}