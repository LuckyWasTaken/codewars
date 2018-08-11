// https://www.codewars.com/kata/esolang-tick

"use strict";

function interpreter(tape) {
    let memory = [0];
    let output = "";
    let pointer = 0;
    tape.split("").forEach((c) => {
        switch (c) {
        case ">":
            if (memory[pointer + 1] === undefined) {
                memory.push(0);
            }
            pointer++;
            break;
        case "<":
            if (pointer === 0) {
                memory.unshift(0);
            } else {
                pointer--;
            }
            break;
        case "+":
            memory[pointer] = (memory[pointer] === 255) 
                ? 0
                : memory[pointer] + 1;
            break;
        case "*":
            output += String.fromCharCode(memory[pointer]);
            break;
        }
    });
    return output;
}