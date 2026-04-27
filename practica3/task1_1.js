"use strict";
let n = parseInt(prompt("Введите целое число N:"));
let temp = Math.abs(n);
let result = "";
if (temp === 0) result = "0";
while (temp > 0) {
    result = (temp % 10) + " " + result;
    temp = Math.floor(temp / 10);
}
alert(result.trim());