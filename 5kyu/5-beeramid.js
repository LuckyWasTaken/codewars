// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/

var beeramid = function(bonus, price) {
    let bottles = Math.floor(bonus / price);   //I wish I could afford this many горьковское...
    let level = 0;
    while(Math.pow(level + 1, 2) <= bottles) {
        level++;
        bottles -= Math.pow(level, 2);
    }
    return level;
};
