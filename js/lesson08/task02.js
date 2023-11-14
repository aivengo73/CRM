'use strict';

/* Первая задача: */

// Напишите функцию генератор массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве И возвращает массив со случайными числами от одного до 100 включительно;
// Продолжаем работать с предыдущей функцией

/* Вторая задача */

// Функция принимает еще два параметра n и m

// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массиваm и n включительно
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.


/* Для решения задачи воспользуемся формулой для расчёта случайного числа в диапазоне от n до m: https://uchet-jkh.ru/i/napisat-programmu-dlya-zapolneniya-massiva-iz-10-elementov-slucainymi-cislami-v-diapazone-ot-100-do-500/ */

function randomArrayGenerator(length, n, m) {
	const randomArr = [];
	let randomNum = 0;

	if(n < m) {
		return randomArrayGenerator(length, m, n);
	};
	for (let i = 0; i < length; i++) {
		randomNum = Math.round(Math.random() * (m - n + 1) + n);
		if(randomNum > m && randomNum <= n) {
			randomArr.push(randomNum);
		};
	};
	return randomArr;
}
let arrLength = 12;
let n = 45;
let m = 49;
const res = randomArrayGenerator(arrLength, n, m);
console.log(res); // [ 46, 47, 47, 47, 46, 49, 48, 47, 49, 49, 46, 47]
console.log(res.length); // 12



// let countUser = 0;
// let numUser = 0;
// let m1 = Math.floor(Math.random() * 100);

// let n1 = Math.floor(Math.random() * 100);


// if (n1 >= 50 || m1 <= 100) {
// 	countUser === 15;
// } else {
// 	countUser = Math.floor((n1 - m1) * 0.3);
// };
// console.log(countUser);

// let numGenerator = Math.floor(Math.random() * (m1 - n1) + n1);
// console.log(numGenerator);

// if (numGenerator > +n1 && numGenerator < +m1) {
// 	 numUser = (prompt(`Я загадал число в этом диапазоне. У Вас будет ${countUser} попыток чтобы угадать его. Введите число`, ''));
// };