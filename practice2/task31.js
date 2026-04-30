"use strict";
let year = Number(prompt("Год:"));
alert((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Високосный" : "Обычный");