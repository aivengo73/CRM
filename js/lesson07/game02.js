"use strict";

// Усовершенствуйте игру, которую написали в game01

// бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
// бот запоминает каждое число которое ввел пользователь и записывает в массив
// бот отграничивает количество попыток до 30% от количества цифр в диапазоне
// если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
// если диапазон от 50 до 100, то попыток бот даёт 15
// если попытки закончились игра прекращается

/* задача не решена пока !!!! */

// let numGenerator = 0;
let countAll = 0;
let numUser = 0;
const numArray = [];

/* бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне */
let n = prompt('Введите начало диапазона, число от 1 до 100', '10');
let m = prompt('Введите конец диапазона, число от 1 до 100', '5');

function guessRandomNum(numUser) {
	let countUser = 0;
	let count = 0;

/* проверка на отмену */
	if (n === null || m === null) {
		return;
	}
	/* проверка на число начала диапазона while (!isNumber(n)) {
    n = prompt("Укажите начало диапазона") */
	if (Number.isNaN(Number(n))) {

		return n = +prompt('Введите начало диапазона, число от 1 до 100', '10')
	}
	/* проверка на число конец диапазона */
	if (Number.isNaN(Number(m))) {
		return m = +prompt('Введите конец диапазона, число от 1 до 100', '5')
	}
	// if (n > m) {
	// 	return guessRandomNum(numUser);
	// };


/* бот отграничивает количество попыток до 30% от количества цифр в диапазоне */
	if (+n >= 1 && +m <= 100) {
		return countUser = Math.floor(Math.abs((+n - +m) * 0.3));
	}

	countAll = countUser - count;
 
	/* генерируем число в диапазоне заданом пользователем */
	let numGenerator = Math.floor(Math.random() * (+m - +n) + +n);

/* предлагаем ввести пользователю загаданное число */
	if (numGenerator > +n && numGenerator < +m) {
		return numUser = (prompt(`Я загадал число в этом диапазоне. У Вас будет ${countUser} попыток чтобы угадать его. Введите число`, ''));
	}
	
	/* проверка на отмену */
	if (numUser === null) {
		return;
	}

	/* проверка на число */
	if (Number.isNaN(Number(numUser))) {
		numUser =	guessRandomNum(prompt('Введите число', ''));

		/* бот запоминает каждое число которое ввел пользователь и записывает в массив */
		return numArray.push(numUser);
	}


/* если число пользователя меньше загаданного */
	if (+numUser > numGenerator) {
		count++;
		numUser =	guessRandomNum(prompt('Меньше! Сделайте ещё одну попытку', ''));
		/* бот запоминает каждое число которое ввел пользователь и записывает в массив */
		return numArray.push(numUser);
	}

	/* если число пользователя больше загаданного */
	if (+numUser < numGenerator) {
		count++;
		numUser =	guessRandomNum(prompt('Больше! Сделайте ещё одну попытку', ''));

		/* бот запоминает каждое число которое ввел пользователь и записывает в массив */
		return numArray.push(numUser);
	}

/* если число угадано */
	if (+numUser === numGenerator) {
		res = alert('Правильно!');
	}

}
guessRandomNum(numUser);
