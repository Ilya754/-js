"use strict";
let r = Number(prompt("Радиус:"));
let side = Number(prompt("Сторона квадрата:"));
alert(Math.PI * r * r > side * side ? "Площадь круга больше" : "Площадь квадрата больше");