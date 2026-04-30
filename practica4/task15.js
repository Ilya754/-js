function toDecimalBase(str, base) {
    let decimal = 0;
    for (let i = 0; i < str.length; i++) {
        let digit = parseInt(str[i], base);
        decimal = decimal * base + digit;
    }
    return decimal;
}
console.log(toDecimalBase('101', 2)); // 5