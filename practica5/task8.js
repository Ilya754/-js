let n = parseInt(prompt("Введите n:"));

function task8a(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        let val = (i % 2 === 0 ? -1 : 1) / i;
        arr.push(val);
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
}

function task8b(x, n) {
    let arr = [];
    let power = x;
    for (let i = 1; i <= n; i++) {
        arr.push(power / i);
        power *= x;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
}

function factorial(k) {
    let f = 1;
    for (let i = 2; i <= k; i++) f *= i;
    return f;
}

function task8c(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(1 / factorial(i));
    }
    let sum = 1;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
}

console.log("8a:", task8a(n));
let x = parseFloat(prompt("Введите x:"));
console.log("8b:", task8b(x, n));
console.log("8c:", task8c(n));