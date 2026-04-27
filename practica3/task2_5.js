"use strict";
let M = parseFloat(prompt("Введите предел M:"));
let a = 0, b = 1;
console.log(a);
do {
    console.log(b);
    let next = a + b;
    a = b;
    b = next;
} while (b <= M);