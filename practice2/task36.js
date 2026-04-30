"use strict";
let a = Number(prompt("a стола:"));
let b = Number(prompt("b стола:"));
let c = Number(prompt("c прямоугольника:"));
let d = Number(prompt("d прямоугольника:"));
let var1 = Math.floor(a / c) * Math.floor(b / d);
let var2 = Math.floor(a / d) * Math.floor(b / c);
alert(var1 > var2 ? "Больше при размещении c вдоль a" : "Больше при размещении d вдоль a");