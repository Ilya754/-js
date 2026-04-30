function squareByOddSum(n) {
    let sum = 0;
    for (let i = 1; i <= 2*n - 1; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(squareByOddSum(7)); // 49