"use strict";


function isLeapYear(year) {

	
	if (modulo4 === 0 && modulo100 === 0 || modulo400 === 0) {
		return true;
	} else {
		return false;
	}
}
const res = isLeapYear();
console.log(res);



/* Для решения задачи воспользуемся формулой для расчёта случайного числа в диапазоне от n до m: https://uchet-jkh.ru/i/napisat-programmu-dlya-zapolneniya-massiva-iz-10-elementov-slucainymi-cislami-v-diapazone-ot-100-do-500/ */


function getNumbers(type) {
	if (type === 'even') {
		const evenNumbers = [];
		for (let i = 2; i <= 10; i += 2) {
			evenNumbers.push(i);
		}
		return evenNumbers;
	} else if (type === 'odd') {
		const oddNumbers = [];
		for (let i = 1; i <= 9; i += 2) {
			oddNumbers.push(i);
		}
		return oddNumbers;
	} else {
		return [];
	}
}
function getNumbers(type) {
	if (type === 'even') {
		return [2, 4, 6, 8, 10]; // example array of even numbers
	} else if (type === 'odd') {
		return [1, 3, 5, 7, 9]; // example array of odd numbers
	} else {
		return []; // return an empty array if the type is neither 'even' nor 'odd'
	}
}