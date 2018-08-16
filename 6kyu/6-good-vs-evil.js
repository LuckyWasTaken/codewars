// https://www.codewars.com/kata/good-vs-evil/

"use strict";
function goodVsEvil(good, evil){
    const radiantWorth = [1, 2, 3, 3, 4, 10];
    const direWorth = [1, 2, 2, 2, 3, 5, 10];

    const radiant = good
        .split(" ")
        .map((val, i) => val * radiantWorth[i])
        .reduce((acc, val) => acc + val, 0);
    const dire = evil
        .split(" ")
        .map((val, i) => val * direWorth[i])
        .reduce((acc, val) => acc + val, 0);
    if (radiant - dire > 0) {
        return "Battle Result: Good triumphs over Evil";
    } else if (radiant - dire < 0) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else {
        return "Battle Result: No victor on this battle field";
    }
}
