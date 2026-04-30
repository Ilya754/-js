"use strict";
let m = Number(prompt("Месяц:"));
let n = Number(prompt("Число:"));
if (n > 1) {
  alert(`Предыдущий день: ${n - 1}.${m}`);
} else {
  alert(`Предыдущий день: 31.${m === 1 ? 12 : m - 1}`);
}
if (n < 28) {
  alert(`Следующий день: ${n + 1}.${m}`);
} else {
  let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (n < daysInMonth[m-1]) {
    alert(`Следующий день: ${n + 1}.${m}`);
  } else {
    alert(`Следующий день: 1.${m === 12 ? 1 : m + 1}`);
  }
}