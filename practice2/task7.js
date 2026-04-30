"use strict";
let A = prompt("A:") === "true";
let B = prompt("B:") === "true";
let C = prompt("C:") === "true";
alert(`а) ${!(A || !B && C)}\nб) ${A && !(B && A || !C)}\nв) ${!(!A || B && C)}\nг) ${!(A || !B && C) || C}\nд) ${!(A && !B || C) && B}\nе) ${!(!A || B && C) || A}`);