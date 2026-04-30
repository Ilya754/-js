let n = parseInt(prompt("Введите размер массива n:"));
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt("Введите элемент " + (i + 1) + ":")));
}
let squares = [];
for (let i = 0; i < arr.length; i++) {
    squares.push(arr[i] * arr[i]);
}
console.log(squares);