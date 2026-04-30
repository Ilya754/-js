let n = parseInt(prompt("Введите размер массива n:"));
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 201 - 100));
}
console.log("Исходный массив:", arr);

function sumEvenIndices(a) {
    let s = 0;
    for (let i = 0; i < a.length; i += 2) s += a[i];
    return s;
}

function minPositive(a) {
    let min = Infinity;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0 && a[i] < min) min = a[i];
    }
    return min === Infinity ? null : min;
}

function sumMinMax(a) {
    let min = a[0], max = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] < min) min = a[i];
        if (a[i] > max) max = a[i];
    }
    return min + max;
}

function countPositive(a) {
    let c = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) c++;
    }
    return c;
}

function sumEvenPositiveInRange(a, from, to) {
    let s = 0;
    for (let i = from; i <= to; i++) {
        if (a[i] > 0 && a[i] % 2 === 0) s += a[i];
    }
    return s;
}

function avgEven(a) {
    let s = 0, c = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            s += a[i];
            c++;
        }
    }
    return c > 0 ? s / c : 0;
}

function sumEvenPositive(a) {
    let s = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0 && a[i] % 2 === 0) s += a[i];
    }
    return s;
}

function sumNonNegativeEvenIndices(a) {
    let s = 0;
    for (let i = 0; i < a.length; i += 2) {
        if (a[i] >= 0) s += a[i];
    }
    return s;
}

function maxInRange(a, from, to) {
    let max = a[from];
    let idx = from;
    for (let i = from + 1; i <= to; i++) {
        if (a[i] > max) {
            max = a[i];
            idx = i;
        }
    }
    return { max, index: idx };
}

function minEvenIndices(a) {
    let min = Infinity;
    let idx = -1;
    for (let i = 0; i < a.length; i += 2) {
        if (a[i] < min) {
            min = a[i];
            idx = i;
        }
    }
    return { min, index: idx };
}

function minInRange(a, from, to) {
    let min = a[from];
    let idx = from;
    for (let i = from + 1; i <= to; i++) {
        if (a[i] < min) {
            min = a[i];
            idx = i;
        }
    }
    return { min, index: idx };
}

function avgOddIndices(a) {
    let s = 0, c = 0;
    for (let i = 1; i < a.length; i += 2) {
        s += a[i];
        c++;
    }
    return c > 0 ? s / c : 0;
}

function avgNotExceeding50(a) {
    let s = 0, c = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 50) {
            s += a[i];
            c++;
        }
    }
    return c > 0 ? s / c : 0;
}

function splitByParity(a) {
    let evenIndices = [];
    let oddIndices = [];
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) evenIndices.push(a[i]);
        else oddIndices.push(a[i]);
    }
    return { evenIndices, oddIndices };
}

function splitSpecial(a) {
    let evenValuesOddIndices = [];
    let oddValuesEvenIndices = [];
    for (let i = 0; i < a.length; i++) {
        if (i % 2 !== 0 && a[i] % 2 === 0) evenValuesOddIndices.push(a[i]);
        if (i % 2 === 0 && a[i] % 2 !== 0) oddValuesEvenIndices.push(a[i]);
    }
    return { evenValuesOddIndices, oddValuesEvenIndices };
}

console.log("Сумма элементов с четными индексами:", sumEvenIndices(arr));
console.log("Минимальный положительный:", minPositive(arr));
console.log("Сумма max и min:", sumMinMax(arr));
console.log("Количество положительных:", countPositive(arr));
let aVal = parseInt(prompt("Введите a (начальный индекс):"));
let bVal = parseInt(prompt("Введите b (конечный индекс):"));
console.log("Сумма четных положительных с", aVal, "по", bVal + ":", sumEvenPositiveInRange(arr, aVal, bVal));
console.log("Среднее четных элементов:", avgEven(arr));
console.log("Сумма четных положительных:", sumEvenPositive(arr));
console.log("Сумма неотрицательных на четных местах:", sumNonNegativeEvenIndices(arr));
let maxRes = maxInRange(arr, aVal, bVal);
console.log("Максимум с", aVal, "по", bVal + ":", maxRes.max, "индекс:", maxRes.index);
let minEvenRes = minEvenIndices(arr);
console.log("Минимум на четных позициях:", minEvenRes.min, "индекс:", minEvenRes.index);
let minRes = minInRange(arr, aVal, bVal);
console.log("Минимум с", aVal, "по", bVal + ":", minRes.min, "индекс:", minRes.index);
console.log("Среднее арифметическое нечетных индексов:", avgOddIndices(arr));
console.log("Среднее элементов <=50:", avgNotExceeding50(arr));
let split1 = splitByParity(arr);
console.log("Четные индексы:", split1.evenIndices);
console.log("Нечетные индексы:", split1.oddIndices);
let split2 = splitSpecial(arr);
console.log("Четные значения на нечетных индексах:", split2.evenValuesOddIndices);
console.log("Нечетные значения на четных индексах:", split2.oddValuesEvenIndices);