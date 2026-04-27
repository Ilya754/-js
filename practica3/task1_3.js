"use strict";
let n = parseInt(prompt("Введите число для перевода в двоичную СС:"));
let bin = "";
let temp = n;
if (temp === 0) bin = "0";
while (temp > 0) {
    bin = (temp % 2) + bin;
    temp = Math.floor(temp / 2);
}
alert(n + " в двоичной СС = " + bin);