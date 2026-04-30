let arr = [];
for (let i = 0; i < 8; i++) {
    arr.push(parseFloat(prompt("Введите элемент " + (i + 1) + ":")));
}
let sum = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
        count++;
    }
}
let avg = count > 0 ? sum / count : 0;
console.log(avg);