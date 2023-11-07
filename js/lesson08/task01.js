'use strict';

// Первая задача:

// Напишите функцию генератор массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве И возвращает массив со случайными числами от одного до 100 включительно;

let numberLength = 7;
const randomArrayGenerator = (length) => {
	let randomNumber = 0;
	let randomArr = [];

	for (let i = 0; i < length; i++) {
		randomNumber = Math.round(Math.random() * 100);
		randomArr.push(randomNumber);
	}
	return randomArr;
}
const randomArr = randomArrayGenerator(numberLength);
console.log(randomArr);// [ 80, 76, 98, 76, 92, 63, 99 ]
console.log(randomArr.length); // 7

