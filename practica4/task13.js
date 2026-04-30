function printFibonacciUpTo(M) {
    let a = 0, b = 1;
    let sequence = [];
    while (a <= M) {
        sequence.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    console.log(`Числа Фибоначчи до ${M}:`, sequence.join(', '));
}
printFibonacciUpTo(45); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34