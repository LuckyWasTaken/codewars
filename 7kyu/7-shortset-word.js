/*jslint es6 */
/* Simple, given a string of words, return the length of the shortest word(s). */

'use strict';

function findShort(s) {
    return s.split(' ')
        .reduce((shortest, current) => shortest.length < current.length
            ? shortest
            : current).length;
}
