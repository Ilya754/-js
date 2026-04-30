function sumReciprocalFactorials(n) {
    let sum = 1; // 1 = 1/0!
    for (let i = 1; i <= n; i++) {
        sum += 1 / factorial(i);
    }
    return sum;
}
console.log(sumReciprocalFactorials(3)); // 1 + 1 + 1/2 + 1/6 = 2.666...