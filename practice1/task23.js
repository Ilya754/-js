"use strict";
let a = Math.abs(Number(prompt("Число 1:")));
let b = Math.abs(Number(prompt("Число 2:")));
alert(`Среднее арифметическое модулей: ${(a + b) / 2}\nСреднее геометрическое модулей: ${Math.sqrt(a * b)}`);