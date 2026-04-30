"use strict";
let a = Number(prompt("a:")), b = Number(prompt("b:")), c = Number(prompt("c:"));
let max = a > b ? (a > c ? a : c) : (b > c ? b : c);
let min = a < b ? (a < c ? a : c) : (b < c ? b : c);
alert(`Макс: ${max}\nМин: ${min}`);