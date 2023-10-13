'use strict';

// Задачи:

// Первая задача:

// ✔ Скопируйте файлы из папки предыдущего задания в новую папку в репозитории

// ✔ Добавьте новый блок инструкций
// ✔ Запросите у пользователя "Наименование товара" с помощью функции prompt и запишите в константу

// ✔ Аналогичные действия сделайте с константами "Количество товара", "Категория товара" и "Цена товара"

// ✔ Выведите в консоль тип данных, убедитесь что количество и цена тип данных numbers, если это не так-то поправьте

// ✔ В консоль выведите строку со значением количество товара, наименование и общую сумму 

// пример: "На складе 3 единицы товара "Приставка денди" на сумму 6600 деревянных"


const productName = prompt('Наименование товара', '');
const productСont = +prompt('Количество товара', '');
const productCategory = prompt('Категория товара', '');
const productPrice = +prompt('Цена товара', '');

console.log(typeof(productName));  // string
console.log(typeof(productСont));  // number
console.log(typeof(productCategory));  // string
console.log(typeof(productPrice));  // number

console.log(productСont);
console.log(productName);
console.log(productСont);

let sum = productСont * productPrice;

console.log(`На складе ${productСont} единицы товара ${productName} на сумму ${sum} деревянных`);
