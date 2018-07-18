/*jslint es6 */
/* In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and moreover 50 new inhabitants
per year come to live in the town. How many years does the town need to see its population
greater or equal to p = 1200 inhabitants? */
'use strict';

function nbYear(p0, percent, aug, p) {
    const multiplier = percent/100;
    let years = 0;
    for(let i = p0; i < p; i+= aug){
      i += i*multiplier
      years++;
    }
    return years;
}