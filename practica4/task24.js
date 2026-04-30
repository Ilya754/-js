function factorial(k) {
    if (k < 0) return null;
    let result = 1;
    for (let i = 2; i <= k; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120