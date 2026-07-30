// Калькулятор любви
console.log("=== Калькулятор любви ===");

let firstName = prompt("Введите имя первого человека:");
let secondName = prompt("Введите имя второго человека:");
let lovePercent = Math.floor(Math.random() * 101);

alert(firstName + " подходит к " + secondName + " на " + lovePercent + " процентов!");
console.log(firstName + " подходит к " + secondName + " на " + lovePercent + "%");

// BMI Калькулятор
console.log("\n=== BMI Калькулятор ===");

let weight = parseFloat(prompt("Введите ваш вес (в кг):"));
let height = parseFloat(prompt("Введите ваш рост (в метрах):"));
let bmi = weight / (height * height);
console.log("Ваш BMI:", bmi.toFixed(2));
let result;
if (bmi <= 18.5) {
    result = "Недостаточный вес";
} else if (bmi <= 25) {
    result = "Нормально";
} else if (bmi <= 30) {
    result = "У вас излишек веса";
} else {
    result = "Ожирение";
}

alert("Ваш BMI: " + bmi.toFixed(2) + " - " + result);
console.log("Результат:", result);

//Високосный год
console.log("\n=== Високосный год ===");

let year = parseInt(prompt("Введите год:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert(year + " - високосный год");
    console.log(year + " - високосный год");
} else {
    alert(year + " - не високосный год");
    console.log(year + " - не високосный год");
}

// Кто оплачивает ужин?
console.log("\n=== Кто оплачивает ужин? ===");

let people = ['Дима', 'Катя', 'Петр', 'Лена'];
console.log("Список:", people);
let randomIndex = Math.floor(Math.random() * people.length);
let payer = people[randomIndex];

alert("Оплачивать будет " + payer);
console.log("Оплачивать будет " + payer);
