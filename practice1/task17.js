"use strict";
let m = Number(prompt("Масса (кг):"));
let V = Number(prompt("Объём (м³):"));
alert(`Плотность тела массой ${m} кг и объёмом ${V} м³ равна ${(m / V).toFixed(3)} кг/м³`);