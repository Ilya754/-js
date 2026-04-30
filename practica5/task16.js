let n = parseInt(prompt("Введите размер массива n:"));
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt("Введите элемент " + (i + 1) + ":")));
}
let newArr = [];
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (!found && arr[i] < 20) {
        continue;
    }
    found = true;
    newArr.push(arr[i]);
}
console.log(newArr);