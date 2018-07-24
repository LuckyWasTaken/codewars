/* Create a function that takes a string and returns the string ciphered with Rot13.
 If there are numbers or special characters included in the string, they should be returned
 as they are. Only letters from the latin/english alphabet should be shifted, like in the
 original Rot13 "implementation".  */

"use strict";
function rot13(message){
    return message
      .replace(/([a-mA-M])|([n-zN-Z])/g,
        (c, m1, m2) => String.fromCharCode(c.charCodeAt() + (m1 ? 13 : -13) ));
}