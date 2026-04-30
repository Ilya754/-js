function GetPow(number, power) {
    let result = 1;
    for (let i = 0; i < Math.abs(power); i++) {
        result *= number;
    }
    return power >= 0 ? result : 1 / result;
}
console.log(GetPow(2, 3)); // 8