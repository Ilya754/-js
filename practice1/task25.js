"use strict";
let n = Number(prompt("Введите четырёхзначное число:"));
let d1 = Math.floor(n / 1000);
let d2 = Math.floor((n / 100) % 10);
let d3 = Math.floor((n / 10) % 10);
let d4 = n % 10;
let sum = d1 + d2 + d3 + d4;
let prod = d1 * d2 * d3 * d4;
alert(`Сумма цифр числа ${n} равна ${sum}, произведение равно ${prod}`);