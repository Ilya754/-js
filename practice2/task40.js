"use strict";
let n = Number(prompt("Месяцев прошло с 1990:"));
let monthIndex = n % 12;
let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
alert(months[monthIndex]);