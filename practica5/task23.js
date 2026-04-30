let n = parseInt(prompt("Введите размер массива n:"));
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt("Введите элемент " + (i + 1) + ":")));
}

function sumOfDigits(num) {
    let sum = 0;
    let n = Math.abs(num);
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

function lastDigit(num) {
    return Math.abs(num) % 10;
}

function firstDigit(num) {
    let n = Math.abs(num);
    while (n >= 10) {
        n = Math.floor(n / 10);
    }
    return n;
}

function sortBySumDigits(a) {
    let sorted = [...a];
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            if (sumOfDigits(sorted[j]) > sumOfDigits(sorted[j + 1])) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    return sorted;
}

function sortByLastDigit(a) {
    let sorted = [...a];
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            if (lastDigit(sorted[j]) > lastDigit(sorted[j + 1])) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    return sorted;
}

function sortByFirstDigit(a) {
    let sorted = [...a];
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            if (firstDigit(sorted[j]) > firstDigit(sorted[j + 1])) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    return sorted;
}

console.log("По сумме цифр:", sortBySumDigits(arr));
console.log("По последней цифре:", sortByLastDigit(arr));
console.log("По первой цифре:", sortByFirstDigit(arr));