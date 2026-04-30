"use strict";
let x1 = Number(prompt("x1 левого нижнего угла 1:"));
let y1 = Number(prompt("y1:"));
let w1 = Number(prompt("ширина 1:"));
let h1 = Number(prompt("высота 1:"));
let x2 = Number(prompt("x2:"));
let y2 = Number(prompt("y2:"));
let w2 = Number(prompt("ширина 2:"));
let h2 = Number(prompt("высота 2:"));

let right1 = x1 + w1, top1 = y1 + h1;
let right2 = x2 + w2, top2 = y2 + h2;

let inside1 = x1 >= x2 && y1 >= y2 && right1 <= right2 && top1 <= top2;
let inside2 = x2 >= x1 && y2 >= y1 && right2 <= right1 && top2 <= top1;
let intersect = right1 > x2 && right2 > x1 && top1 > y2 && top2 > y1;

alert(`1 в 2: ${inside1}\n2 в 1: ${inside2}\nПересекаются: ${intersect}`);