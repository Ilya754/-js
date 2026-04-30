function monthsToSave(initial, percent, targetSum) {
    let balance = initial;
    let months = 0;
    while (balance < targetSum) {
        balance += balance * (percent / 100);
        months++;
    }
    return months;
}
console.log(monthsToSave(1000, 2, 2000)); // ~35 месяцев