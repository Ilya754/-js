let arr = [];
for (let i = 0; i < 20; i++) {
    arr.push(parseInt(prompt("Введите элемент " + (i + 1) + ":")));
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && i % 2 !== 0) {
        sum += arr[i];
    }
}
console.log(sum);