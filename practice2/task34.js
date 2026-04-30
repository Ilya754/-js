"use strict";
let x = Number(prompt("x:"));
let y = Number(prompt("y:"));
let max = x > y ? x : y;
let min = x < y ? x : y;
alert(`Макс: ${max}, Мин: ${min}`);