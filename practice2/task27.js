"use strict";
let n = Number(prompt("Натуральное число:"));
let last = n % 10;
alert(`Заканчивается чётной: ${last % 2 === 0}\nЗаканчивается нечётной: ${last % 2 !== 0}`);