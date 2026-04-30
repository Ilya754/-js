let n = parseInt(prompt("Введите размер массива n:"));
let m = parseInt(prompt("Введите размер массива m:"));
let arrN = [];
let arrM = [];
for (let i = 0; i < n; i++) {
    arrN.push(parseInt(prompt("Введите элемент массива N " + (i + 1) + ":")));
}
for (let i = 0; i < m; i++) {
    arrM.push(parseInt(prompt("Введите элемент массива M " + (i + 1) + ":")));
}

function inArray(val, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return true;
    }
    return false;
}

let diff = [];
for (let i = 0; i < arrN.length; i++) {
    if (!inArray(arrN[i], arrM)) {
        diff.push(arrN[i]);
    }
}
console.log("В N но не в M:", diff);

let intersection = [];
for (let i = 0; i < arrN.length; i++) {
    if (inArray(arrN[i], arrM) && !inArray(arrN[i], intersection)) {
        intersection.push(arrN[i]);
    }
}
console.log("Пересечение:", intersection);

let union = [];
for (let i = 0; i < arrN.length; i++) {
    if (!inArray(arrN[i], union)) union.push(arrN[i]);
}
for (let i = 0; i < arrM.length; i++) {
    if (!inArray(arrM[i], union)) union.push(arrM[i]);
}
let symmetricDiff = [];
for (let i = 0; i < union.length; i++) {
    let inN = inArray(union[i], arrN);
    let inM = inArray(union[i], arrM);
    if ((inN && !inM) || (!inN && inM)) {
        symmetricDiff.push(union[i]);
    }
}
console.log("Симметрическая разность:", symmetricDiff);