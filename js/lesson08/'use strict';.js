'use strict';

// Усовершенствуйте игру, которую написали в game01

// бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
// бот запоминает каждое число которое ввел пользователь и записывает в массив
// бот ограничивает количество попыток до 30% от количества цифр в диапазоне
// если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
// если диапазон от 50 до 100, то попыток бот даёт 15
// если попытки закончились игра прекращается


const array = [];
let num = 0;
let count = 0;
const arrUser = [];
const numberUser1 = +prompt('Введите число от 1 до 100', '10');
const numberUser2 = +prompt('Введите число от 1 до 100', '5');


function randomNum(numberUser1, numberUser2) {


	array.push(numberUser1);
	array.push(numberUser2);

	if (numberUser1 > numberUser2) {
		return randomNum(numberUser1, numberUser2);
	};
	for (let i = 0; i < length; i++) {
		num = Math.floor(Math.random() * 100) * ((m - n + 1) + n);
		if (num > +numberUser1 && num < +numberUser2) {
			arrUser.push();
		};
		count++;
	};
	return randomNum(prompt('Введите число', ''));
}
randomNum(numberUser1, numberUser2);









console.log(arrUser);


function randomNum(numberUser1, numberUser2) {
	if (numberUser === null) {
		return;
	};

	if (Number.isNaN(Number(numberUser))) {
		return randomNum(prompt('Введите число', ''));
	};

	if (+numberUser > num) {
		return randomNum(prompt('Меньше! Сделайте ещё одну попытку', ''));
	};

	if (+numberUser < num) {
		return randomNum(prompt('Больше! Сделайте ещё одну попытку', ''));
	};

	if (+numberUser === num) {
		res = alert('Правильно!');
	};
}
randomNum(numberUser);