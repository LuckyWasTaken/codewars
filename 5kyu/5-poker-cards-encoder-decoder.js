// https://www.codewars.com/kata/poker-cards-encoder-slash-decoder

"use strict";
function cardsConverter(input) {
    const suits = ["c", "d", "h", "s"];
    const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];

    function decodeCard(number) {
        return `${cards[number % 13]}${suits[Math.floor(number / 13)]}`;
    }

    function encodeCard(string) {
        return cards.indexOf(string[0]) + suits.indexOf(string[1]) * 13;
    }

    if (!Array.isArray(input)) {
        return null;
    }
    if (typeof(input[0]) === "number") {
        return input.sort((a, b) => a - b).map(decodeCard);
    } else {
        return input.map(encodeCard).sort((a, b) => a - b);
    }
}
