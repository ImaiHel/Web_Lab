// Вывод значения в консоль
console.log("Привет, мир! Это мой первый скрипт на JavaScript!");

// Две переменные с числами
let number1 = 15;
let number2 = 7;

console.log("Переменная number1 =", number1);
console.log("Переменная number2 =", number2);

// Сложение двух чисел
let sum = number1 + number2;
console.log("Сумма number1 + number2 =", sum);

// Преобразование строки в верхний и нижний регистр
let text = "Привет, JavaScript!";

let upperText = text.toUpperCase();
let lowerText = text.toLowerCase();

console.log("Исходная строка:", text);
console.log("В верхнем регистре:", upperText);
console.log("В нижнем регистре:", lowerText);

// Базовые операции над числами
let a = 20;
let b = 6;

console.log("\n=== Базовые операции ===");
console.log("a =", a, "b =", b);

// Сложение
console.log("a + b =", a + b);

// Вычитание
console.log("a - b =", a - b);

// Умножение
console.log("a * b =", a * b);

// Деление
console.log("a / b =", a / b);

// Возведение в квадрат
console.log("a^2 =", a ** 2);
console.log("b^2 =", b ** 2);

// Остаток от деления (modulo)
console.log("a % b =", a % b);

// Целочисленное деление (Math.floor)
console.log("Целая часть от a / b =", Math.floor(a / b));

// Два дополнительных задания

// Проверка четности числа
console.log("\n=== Проверка четности ===");
function isEven(num) {
    if (num % 2 === 0) {
        return "четное";
    } else {
        return "нечетное";
    }
}
console.log("Число", a, "-", isEven(a));
console.log("Число", b, "-", isEven(b));

// Среднее арифметическое
console.log("\n=== Среднее арифметическое ===");
function average(x, y) {
    return (x + y) / 2;
}
console.log("Среднее арифметическое", a, "и", b, "=", average(a, b));
