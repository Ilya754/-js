"use strict";
let A = prompt("A (true/false)") === "true";
let B = prompt("B (true/false)") === "true";
alert(`а) ${!(!A && !B) && A}\nб) ${!(!A || !B) || A}\nв) ${!(!A || !B) && B}`);