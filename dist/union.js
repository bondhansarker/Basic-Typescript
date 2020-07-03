"use strict";
function combine(input1, input2, result) {
    let res;
    if (result == "number") {
        res = +input1 + +input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
}
console.log(combine("3", "4", "string"));
console.log(combine(3, 4, "number"));
