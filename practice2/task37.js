"use strict";
let k = Number(prompt("Номер карты (6-14):"));
let rank = k <= 10 ? `${k}` : k === 11 ? "валет" : k === 12 ? "дама" : k === 13 ? "король" : "туз";
alert(rank);