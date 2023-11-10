'use strict';
// Создайте файл game01.js

// Написать простой игровой бот "Угадай число", который умеет следующее:

// Загадывает число от 1 до 100;
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.

let num = Math.floor(Math.random() * 100);
console.log(num);

let numberUser = +prompt('Введите число от 1 до 100', '2');

function randomNum(numberUser) {
	let res = '';
console.log(numberUser);

             /* отмена не работает */

	// if (numberUser === 0) {
	// 	return;
	// }

 	 if (!Number.isFinite(numberUser) || !Number.isInteger(numberUser) || numberUser > 100 || numberUser < 1) {
	
		numberUser = +prompt('Введите число', '');
	return	randomNum(numberUser);
	};
	


	if (numberUser > num) {
	
		numberUser = +prompt('Меньше! Сделайте ещё одну попытку', '');
		console.log(numberUser);
		return randomNum(numberUser);
	};

	if (numberUser < num) {
		numberUser = +prompt('Больше! Сделайте ещё одну попытку', '');
		console.log(numberUser);
		return randomNum(numberUser);
	};

	if (numberUser === num) {
		res = alert('Правильно!');
	};
	return res;
}
randomNum(numberUser);
