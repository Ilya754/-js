function fromDecimalBase(num, base) {
    if (base < 2 || base > 10) return null;
    let n = Math.abs(num);
    let result = '';
    do {
        result = (n % base) + result;
        n = Math.floor(n / base);
    } while (n > 0);
    return result || '0';
}
console.log(fromDecimalBase(5, 2)); // "101" (5₁₀ → 101₂)