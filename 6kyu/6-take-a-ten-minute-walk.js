/* You live in the city of Cartesia where all roads are laid out in a perfect grid.
 You arrived ten minutes too early to an appointment, so you decided to take the opportunity
 to go for a short walk. The city provides its citizens with a Walk Generating App on their
 phones -- everytime you press the button it sends you an array of one-letter strings
 representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only
 a single block in a direction and you know it takes you one minute to traverse one city
 block, so create a function that will return true if the walk the app gives you will take
 you exactly ten minutes (you don't want to be early or late!) and will, of course, return you
 to your starting point. Return false otherwise. */

"use strict";
function isValidWalk(walk) {
    if(walk.length !== 10) {
        return false;
    }

    const pos = [0,0]

    walk.forEach((way) => {
      if (way === "n") pos[0]++;
      if (way === "s") pos[0]--;
      if (way === "e") pos[1]++;
      if (way === "w") pos[1]--;
    })

    return pos.join() === "0,0"
}

//Did REALLY bad job here. Could've just compare number of opposite directions.