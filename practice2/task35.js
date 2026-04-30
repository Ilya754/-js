"use strict";
let t = Number(prompt("Минуты с начала часа:"));
let phase = t % 5;
alert(phase < 3 ? "Зелёный" : "Красный");