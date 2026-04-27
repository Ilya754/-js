"use strict";
let attempts = 0, num;
do {
    num = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
    console.log("Попытка " + (attempts + 1) + ": " + num);
    attempts++;
} while (num !== 7);
alert("Число 7 выпало на " + attempts + "-й попытке");