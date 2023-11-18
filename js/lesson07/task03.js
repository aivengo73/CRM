'use strict';

// ============== Первая задача: ====================

// Напишите функцию генератор массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве И возвращает массив со случайными числами от одного до 100 включительно;

// ========================== Вторая задача: ==========================
// Продолжаем работать с предыдущей функцией
// Функция принимает еще два параметра n и m

// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массиваm и n включительно
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

// ========== Третья задача: =====================

// Скопируйте код task02.js в task03.js

// Добавьте 4-ый опциональный параметр у функции


//  4-ый опциональный параметр это строка:

// если функция получает 'even', то функция возвращает массив чётных чисел
// если функция получает 'odd', то функция возвращает массив нечётных чисел

/* Для решения задачи воспользуемся формулой для расчёта случайного числа в диапазоне от n до m: https://uchet-jkh.ru/i/napisat-programmu-dlya-zapolneniya-massiva-iz-10-elementov-slucainymi-cislami-v-diapazone-ot-100-do-500/ */


function randomArrayGenerator(length, n, m, string) {
	const randomArr = [];
	let randomNum = 0;

	if (n < m) {
		return randomArrayGenerator(length, n, m, string);
	};

	for (let i = 0; i < length; i++) {
		randomNum = Math.round(Math.random() * (m - n + 1) + n);

		if (randomNum > m && randomNum <= n) {

			if (string === 'even' && randomNum % 2 === 0) {
				randomArr.push(randomNum);
			}

		else if (string === 'odd' && randomNum % 2 !== 0) {
				randomArr.push(randomNum);
			};
		};
	};
	return randomArr
}

let string = 'odd';
let arrLength = 7;
let n = 9;
let m = 1;
const res = randomArrayGenerator(arrLength, n, m, string);
console.log(`res:`, res); // res: [ 7, 7, 3 ]
console.log(`length:`, res.length); //  length: 3