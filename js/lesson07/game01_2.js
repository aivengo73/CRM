"use strict";

//             АЛГОРИТМ РЕШЕНИЯ.
/* 1. Задаётся диапазон из двух чисел и сохраняется в переменных n и m.
	 2. В зависимости от диапазона выставляется колличество попыток для угадывания числа пользователем
			и записывается в переменную const numberAttempts.
	 3. Генерируется число которое должен угадать пользователь лежащее в заданном диапазоне и сохраняем его в const num.
	 4. Создаём функцию проверку на целое, натуральное число и присваиваем её в const isNumber.
	 5. Объявляем function(), задача которой принимать от пользователя число, сравнивая его с рондомным от бота,
			формировать ответы и выводить их на экран
	 6. Внутри тела function() создаём переменную numUser. В неё будет приходить ответ от пользователя через prompt().
	 7. Создаём переменную let count, которая будет подсчитывать колличество попыток отгадок числа пользователем.
	 8. Делаем проверку - сравнение колличество попыток данных пользователю numberAttempts с колличеством использованных count.
	 9. Делаем проверку на "Отмену игры".
	 
	10. Просим пользователя ввести число через prompt, делаем проверку на число введённого значения и сохраняем его в записывается в массив numUserArr.
			Если это не число, зацикливаем на функцию проверки сохранённой в const isNumber, пока введённое значение не будет числом.
			При этом выводим пользователю на экран "Введите число".
	11. Делаем сравнение вводимого числа пользователем с числом введёным ранее и находящимся в массиве numUserArr,
			при обнаружении совпадения выводится сообщение на экран "Это число вы уже вводили" попытка не засчитывается.
	12. Сравниваем значения чисел бота и пользователя. Если число пользователя меньше случайного числа бота Выводим на эран "Больше!".
			и зацикливаем программу. Делаем рекурсию.
	13. Если число пользователя больше случайного числа бота Выводим на эран "Меньше!".
			и зацикливаем программу. Делаем рекурсию.
	14. "Правильно" делаем return со значением числа пользователя и выводом на экран "Правильно"
	15. Заканчиваем игру. */





function randomNum() {

	const n = prompt('Введите число начало диапазона', '');
	const m = prompt('Введите число конец диапазона', '');
	const numUser = prompt(`Введите число от ${n} до ${m}`, "");
	let count = 0;
	const numUserArr = [];
	const numberAttempts = Math.floor(Math.abs((+n - +m) * 0.3));
	const num = Math.round(Math.random() * (m - n));
	console.log(num);


	const isNumber = function (numUser) {
		return !isNaN(parseFloat(numUser)) && isFinite(numUser);
	};

	if (!isNumber(n) || !isNumber(m) || !(+n >= 1 && +m <= 100)) {
		alert('Введите число!');
		return randomNum();
	}
	// Math.round(Math.random() * (m - n) + n)

	if (numUser === null) {
		return;
	}
	// if (n === null || m === null) {
	// 	return;
	// }

	if (!isNumber(numUser)) {
		alert('Введите число!');
		return randomNum();
	}
	// else {
	// 	numUserArr.push(numUser);
	// 	numUserArr.map((item) => parseFloat(item)).sort();
	// 	console.log(numUserArr);

	// }

	if (!isNumber(numUser) || numUserArr.includes(numUser)) {
		alert("Это число вы уже вводили");
	}

	if (count === numberAttempts) {
		alert('У Вас закончились все попытки');
	}

	while (true) {
		if (+numUser > num) {
			alert('Меньше!');
			count++;
			numUserArr.push(numUser);
			numUserArr.map((item) => parseFloat(item)).sort();
			console.log(numUserArr);
			continue;
		}

		if (+numUser < num) {
			alert('Больше!');
			count++;
			numUserArr.push(numUser);
			numUserArr.map((item) => parseFloat(item)).sort();
			console.log(numUserArr);
			continue;
		}

		if (+numUser === num) {
			alert('Правильно!');
			break;
		}
	}
}
randomNum();

