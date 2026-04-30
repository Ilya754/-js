"use strict";
let k = Number(prompt("День года (1-365):"));
let dayOfWeek = (k - 1) % 7; // 0=Пн, 5=Сб, 6=Вс
alert(dayOfWeek >= 5 ? "Выходной" : "Рабочий");