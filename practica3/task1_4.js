"use strict";
let n = parseInt(prompt("Введите число для перевода в пятеричную СС:"));
let res = "";
let temp = n;
if (temp === 0) res = "0";
while (temp > 0) {
    res = (temp % 5) + res;
    temp = Math.floor(temp / 5);
}
alert(n + " в пятеричной СС = " + res);