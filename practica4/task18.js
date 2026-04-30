function powerSum(x) {
    let sum = 0;
    let power = x;
    for (let i = 1; i <= 11; i += 2) {
        sum += power / i;
        power *= x * x; // x^(i+2)
    }
    return sum;
}
console.log(powerSum(2)); // 2 + 8/3 + 32/5 + 128/7 + 512/9 + 2048/11