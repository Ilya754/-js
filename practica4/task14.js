function getNumberInRange() {
    let num;
    do {
        num = parseInt(prompt('Введите число от 1 до 100:'), 10);
    } while (isNaN(num) || num < 1 || num > 100);
    alert('Введено корректное число: ' + num);
    return num;
}
