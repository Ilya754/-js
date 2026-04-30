let n = parseInt(prompt("Введите размер массива n (n > 4):"));
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt("Введите элемент " + (i + 1) + ":")));
}
let newArr = [];
for (let i = 0; i < arr.length - 4; i++) {
    newArr.push(arr[i]);
}
console.log(newArr);