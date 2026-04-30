function sumOfSquares(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += squareByOddSum(i);
    }
    return total;
}
console.log(sumOfSquares(4)); // 1+4+9+16 = 30