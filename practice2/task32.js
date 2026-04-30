"use strict";
let a = Number(prompt("a стола:"));
let b = Number(prompt("b стола:"));
let c = Number(prompt("c кости:"));
let d = Number(prompt("d кости:"));
alert((c <= a && d <= b) || (c <= b && d <= a) ? "Кость поместится" : "Не поместится");