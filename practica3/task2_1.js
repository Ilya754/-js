"use strict";
let sum = 0, num;
do {
    num = parseFloat(prompt("Введите число (0 для выхода):"));
    if (!isNaN(num)) sum = sum + num;
} while (num !== 0);
alert("Сумма: " + sum);