'use strict';

// !! Модуль 4 Урок 3

// Первая задача:

// В прошлом задании вы от пользователя получали количество товара и цену.

// ✔ С помощью конструкции if (else) убедитесь, что пользователь ввёл число

// ✔ Если число, то всё должно работать как и в прошлом задании

// ✔ Если пользователь вёл не число, то вывести сообщение "Вы ввели некорректные данные"

// ✔ Других сообщений в консоли быть не должно.

const productName = prompt('Наименование товара', '');
const productСont = +prompt('Количество товара', '');
const productCategory = prompt('Категория товара', '');
const productPrice = +prompt('Цена товара', '');



if (Number.isFinite(productСont) && Number.isInteger(productСont) && Number.isFinite(productPrice)) {
	let sum = productСont * productPrice;
	console.log(`На складе ${productСont} единицы товара ${productName} на сумму ${sum} деревянных`);
}
else {
	console.log('Вы ввели некорректные данные');
}




