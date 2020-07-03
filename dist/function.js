"use strict";
window.onload = function () {
    const btn = document.querySelector("button");
    const a = document.getElementById("txt1");
    const b = document.getElementById("txt2");
    let add = function (a, b, callback) {
        const x = a + b;
        callback(x);
    };
    let addition = add;
    btn.addEventListener("click", function () {
        addition(+a.value, +b.value, (x) => {
            console.log(x);
        });
    });
};
