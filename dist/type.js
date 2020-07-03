"use strict";
let userInput;
let userName;
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw ({ message: message, code: code });
}
let func = (color) => {
    console.log(color);
};
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let bg = Color.Green;
func(bg);
generateError("Error", 500);
