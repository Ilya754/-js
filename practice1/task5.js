"use strict";
let min = Number(prompt("Введите минимальное значение:"));
let max = Number(prompt("Введите максимальное значение:"));
alert(Math.floor(Math.random() * (max - min + 1)) + min);