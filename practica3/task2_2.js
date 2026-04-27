"use strict";
let sum = 0, count = 0, num;
do {
    num = parseFloat(prompt("Введите число (0 для выхода):"));
    if (!isNaN(num) && num !== 0) {
        sum = sum + num;
        count++;
    }
} while (num !== 0);
if (count > 0) {
    alert("Среднее: " + (sum / count).toFixed(2));
} else {
    alert("Числа не введены");
}