"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertArrays(array) {
    const concatenatedText = array.join("");
    const textLength = concatenatedText.length;
    return [concatenatedText, textLength];
}
console.log(convertArrays(['How', 'are', 'you?']));
console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
//# sourceMappingURL=03_ConvertArrays.js.map