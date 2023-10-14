'use strict';


// !! Модуль 4 Урок 3

// ﻿Вторая задача:

// ✔ Создайте файл tasks.js

// ✔ Подключите его к index.html

// ✔ Создайте константу rain

// ✔ с помощью Math.Random и Math.round напишите выражение, которое будет возвращать 1 или 0


// ✔ Далее используя условную конструкцию выведите сообщение,

// если rain = 1

// Пошёл дождь. Возьмите зонт!

// если rain = 0

// Дождя нет!

const rain = Math.random();
const result = Math.round(rain);
console.log(result);

if (result === 1) {
	console.log('Пошёл дождь. Возьмите зонт!');

} else {
	console.log('Дождя нет!');
}


// ﻿Третья задача:

// ✔ Выполняем в файле tasks.js

// ✔ Артур хочет поступить на бюджет в институт, для этого ему нужно хорошо сдать три экзамена и набрать минимум 265 баллов.

// ✔ Напишите программу, которая запрашивает у пользователя (prompt) результаты экзаменов по трём направлениям и проверяет, поступил он в институт или нет.

// Пример:
// Введите кол-во баллов по математике: 85
// Введите кол-во баллов по русскому языку: 75
// Введите кол-во баллов по информатике: 95
// Поздравляю, вы поступили на бюджет!



const ballsМathematic = +prompt('Введите кол-во баллов по математике', '');
const ballsRussianLanguage = +prompt('Введите кол-во баллов по русскому языку', '');
const ballsComputerScience = +prompt('Введите кол-во баллов по информатике', '');


let sumBalls = console.log(typeof(ballsМathematic + ballsRussianLanguage + ballsComputerScience));


if (Number.isFinite(ballsМathematic) && Number.isFinite(ballsRussianLanguage) && Number.isFinite(ballsComputerScience) && sumBalls != ' ' && sumBalls >=0 && sumBalls > 264 ) {

	
	console.log(sumBalls);
	console.log('Поздравляю, вы поступили на бюджет!');
	} else {
		console.log(sumBalls);
		console.log('У Вас недостаточно баллов для поступления на бюджет!');
		
	};

// 	﻿Четвёртая задача:

// ✔ Выполняем в файле tasks.js

// ✔ Вам необходимо написать программу для банкомата, который может выдавать минимальные купюры 100р

// ✔ Владимир хочет снять деньги в банкомате, с помощью prompt спросите сколько денег он хочет снять

// ✔ Ваша программа должна проверить, сможет ли банкомат выдать сумму, которую запросил Владимир

// ✔ Выведите сообщение в консоль
	
const amountMoney = +prompt('Какую сумму Вы хотели бы снять?');

let res = amountMoney % 100;

 if( res === 0 && amountMoney >= 100 && Number.isFinite(amountMoney) && Number.isInteger(amountMoney) ) { 

console.log(`Запрашиваемая сумма ${amountMoney} рублей готова к выдаче!`);

} else {
	console.log('Введите сумму кратную 100!');
	
};






