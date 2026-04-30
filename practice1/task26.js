"use strict";

let x = 10, y = 2;

let z1 = x / (y * (x + y)) / 2;
alert(`1) ${z1.toFixed(2)}`);

let z2 = (x / y) * x + (y / 2) - (x * y);
alert(`2) ${z2}`);

let z3 = (x + y) / (x / y);
alert(`3) ${z3}`);

let z4 = (x - y) / (y - x);
alert(`4) ${z4}`);

let z5 = (x - y * x) / y;
alert(`5) ${z5}`);