"use strict";
let m = Number(prompt("Масть (1-4):"));
let k = Number(prompt("Достоинство (6-14):"));
let suit = m === 1 ? "пики" : m === 2 ? "трефы" : m === 3 ? "бубны" : "червы";
let rank = k <= 10 ? `${k}` : k === 11 ? "валет" : k === 12 ? "дама" : k === 13 ? "король" : "туз";
alert(`${rank} ${suit}`);