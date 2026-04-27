
let N = parseInt(prompt("Введите длину ряда:"));
let M = 20;
let row = "";

for (let i = 0; i < N; i++) {
    row += M + " ";
}

alert(`Ряд чисел: ${row}`);