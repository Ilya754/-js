"use strict";
let a = Number(prompt("Катет a:"));
let b = Number(prompt("Катет b:"));
let c = Math.sqrt(a ** 2 + b ** 2);
alert(`Периметр треугольника: ${(a + b + c).toFixed(2)}`);