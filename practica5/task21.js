let n = parseInt(prompt("Введите размер массива n:"));
let m = parseInt(prompt("Введите количество сдвигов m:"));
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt("Введите элемент " + (i + 1) + ":")));
}
let shift = m % n;
let shifted = [];
for (let i = shift; i < arr.length; i++) {
    shifted.push(arr[i]);
}
for (let i = 0; i < shift; i++) {
    shifted.push(arr[i]);
}
console.log(shifted);