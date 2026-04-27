"use strict";
let base7 = prompt("Введите число в семеричной СС:");
let dec = 0;
let power = 1;
let i = base7.length - 1;
while (i >= 0) {
    dec = dec + parseInt(base7[i]) * power;
    power = power * 7;
    i--;
}
alert("Десятичное: " + dec);