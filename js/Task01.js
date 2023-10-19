'use strict';


// Первая задача:

// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях

// 1 евро = 1.2 доллара,

// 1 доллар = 73 рубля.


const dollarValue = 73;
const euroValue = dollarValue * 1.2;
let rubValue = 0;

function getConvert(price) {
	return rubValue = price * euroValue;
}
let sum = getConvert(10);  
console.log(`Стоимость покупки составляет ${sum} руб.`); // Стоимость покупки составляет 876 руб.
