"use strict";
let R = Number(prompt("Внешний радиус R:"));
let r = Number(prompt("Внутренний радиус r:"));
alert(`Площадь кольца: ${(Math.PI * (R ** 2 - r ** 2)).toFixed(2)}`);