"use strict";
let k = Number(prompt("День года:"));
let start = prompt("1 января — какой день недели? (0-Пн, 6-Вс):");
start = Number(start);
let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
alert(days[(k - 1 + start) % 7]);