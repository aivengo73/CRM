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

let numberUser = prompt('Введите число от 1 до 100', '2');

function randomNum(numberUser) {
	if (numberUser === null) {
		return;
	};

if(Number.isNaN(Number(numberUser))) {
	return randomNum(prompt('Введите число', ''));
};

	if (+numberUser > num) {
		return randomNum(prompt('Меньше! Сделайте ещё одну попытку', ''));
	};

	if (+numberUser < num) {
		return randomNum( prompt('Больше! Сделайте ещё одну попытку', ''));
	};

	if (+numberUser === num) {
		res = alert('Правильно!');
	};
}
randomNum(numberUser);


// if (!Number.isFinite(numberUser) || !Number.isInteger(numberUser) || numberUser > 100 || numberUser < 1) {
	
// 	return randomNum(prompt('Введите число', ''));
// 	};


