
let number = prompt("Введите число для вывода:");
let count = parseInt(prompt("Сколько раз вывести?"));
let result = "";

for (let i = 0; i < count; i++) {
    result += number + " ";
}

alert(`Результат: ${result}`);