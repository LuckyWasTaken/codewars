// https://www.codewars.com/kata/sum-of-two-integers/train/javascript

function add (x, y) {
    return !y
        ? x
        : add(x ^ y , (x & y) << 1);
}