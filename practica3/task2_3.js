"use strict";
let num;
do {
    num = parseFloat(prompt("Введите число от 1 до 100:"));
} while (isNaN(num) || num < 1 || num > 100);
alert("Корректное число: " + num);