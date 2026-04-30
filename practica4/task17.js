function printDigits(n) {
    let num = Math.abs(n);
    if (num === 0) console.log(0);
    let digits = [];
    while (num > 0) {
        digits.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    console.log(`Цифры числа ${n}:`, digits.join(', '));
}
printDigits(12345); // 1, 2, 3, 4, 5