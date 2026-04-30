function alternatingSum(n) {
    let sum = 0;
    let sign = 1;
    for (let i = 1; i <= n; i++) {
        sum += sign / i;
        sign = -sign;
    }
    return sum;
}
console.log(alternatingSum(4)); // 1 - 0.5 + 0.333... - 0.25 = 0.58333...