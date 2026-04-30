let n = parseInt(prompt("Введите размер массива n:"));
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt("Введите элемент " + (i + 1) + ":")));
}

function bubbleSort(a) {
    let sorted = [...a];
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            if (sorted[j] > sorted[j + 1]) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    return sorted;
}

function selectionSort(a) {
    let sorted = [...a];
    for (let i = 0; i < sorted.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < sorted.length; j++) {
            if (sorted[j] < sorted[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            let temp = sorted[i];
            sorted[i] = sorted[minIdx];
            sorted[minIdx] = temp;
        }
    }
    return sorted;
}

function quickSort(a) {
    if (a.length <= 1) return a;
    let pivot = a[0];
    let left = [];
    let right = [];
    for (let i = 1; i < a.length; i++) {
        if (a[i] < pivot) left.push(a[i]);
        else right.push(a[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("Пузырьком:", bubbleSort(arr));
console.log("Выбором:", selectionSort(arr));
console.log("Быстрая:", quickSort(arr));