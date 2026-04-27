"use strict";
let binStr = prompt("Введите двоичное число:");
let dec = 0;
let power = 1;
let i = binStr.length - 1;
while (i >= 0) {
    if (binStr[i] === "1") {
        dec = dec + power;
    }
    power = power * 2;
    i--;
}
alert("Десятичное: " + dec);