"use strict";
function alphabetPosition(text) {
    return text
        .replace(/[^a-zA-Z]/g, "")        //Leave only letters
        .toLowerCase()                   //Avoid checking IF UPPERCASE
        .split("")
        .map((c) => c.charCodeAt() - 96) //Replace with charcode
        .join(" ");
}