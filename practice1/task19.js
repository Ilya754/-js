"use strict";
let a = Number(prompt("a:"));
let b = Number(prompt("b:"));
let c = Number(prompt("c:"));
let e = Number(prompt("e:"));
let D = b ** 2 - 4 * a * (c - e);
if (D > 0) {
  let x1 = (-b + Math.sqrt(D)) / (2 * a);
  let x2 = (-b - Math.sqrt(D)) / (2 * a);
  alert(`Корни: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);
} else if (D === 0) {
  alert(`Один корень: x = ${(-b / (2 * a)).toFixed(2)}`);
} else {
  alert("Действительных корней нет");
}