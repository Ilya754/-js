"use strict";
let x = Number(prompt("x:"));
let y = x > 0 ? Math.sin(x) : Math.cos(x);
alert(y.toFixed(3));