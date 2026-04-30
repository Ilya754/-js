"use strict";
let age = prompt("Введите возраст:");
if (age === null || isNaN(Number(age))) {
  age = 18;
} else {
  age = Number(age);
}
alert(`Ваш возраст: ${age}`);