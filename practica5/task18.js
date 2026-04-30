let n = parseInt(prompt("Введите размер массива n:"));
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt("Введите элемент " + (i + 1) + ":")));
}
let unique = [];
for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        unique.push(arr[i]);
    }
}
console.log(unique);