"use strict";
let km = Number(prompt("км:"));
let ft = Number(prompt("футы:"));
let m1 = km * 1000;
let m2 = ft * 0.305;
alert(m1 < m2 ? "Первое расстояние меньше" : "Второе расстояние меньше");