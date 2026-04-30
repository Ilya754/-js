"use strict";
let a = Number(prompt("Катет a:"));
let b = Number(prompt("Катет b:"));
alert(`Гипотенуза: ${Math.sqrt(a ** 2 + b ** 2).toFixed(2)}`);