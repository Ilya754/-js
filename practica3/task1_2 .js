"use strict";
let sum = parseFloat(prompt("Начальная сумма (руб):"));
let months = 0;
while (sum < 100000) {
    sum = sum * 1.02;
    months++;
}
alert("Через " + months + " месяцев");