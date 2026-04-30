function sumFactorials(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += factorial(i);
    }
    return sum;
}
console.log(sumFactorials(4)); // 1!+2!+3!+4! = 1+2+6+24 = 33