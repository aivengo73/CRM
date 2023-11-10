'use strict';

// + Четвертая задача (необязательная):

// Создайте файл task04.js

// Необходимо написать функцию, которая принимает 2 параметра n и m

// И возвращает массив с високосными годами в диапазоне между n и m

// Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора

// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

// const arr = [1986, 2016, 1870, 2010, 1972, 2156, 2298, 2384, 2768];

const arrayLeapYears = [];

function leapYearBack(n, m) {
	if (n < m) {
		let max = m;
		let min = n;
	}

	for (let year = n; year < m; year++) {
		if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
			
			 arrayLeapYears.push(year);
		};
	};
	return arrayLeapYears;
}
const result = leapYearBack(-1000, 1020);

console.log(result.length); // 484
console.log(result); /* [
  -996, -992, -988, -984, -980, -976, -972, -968, -964, -960,
  -956, -952, -948, -944, -940, -936, -932, -928, -924, -920,
  -916, -912, -908, -904, -896, -892, -888, -884, -880, -876,
  -872, -868, -864, -860, -856, -852, -848, -844, -840, -836,
  -832, -828, -824, -820, -816, -812, -808, -804, -796, -792,
  -788, -784, -780, -776, -772, -768, -764, -760, -756, -752,
  -748, -744, -740, -736, -732, -728, -724, -720, -716, -712,
  -708, -704, -696, -692, -688, -684, -680, -676, -672, -668,
  -664, -660, -656, -652, -648, -644, -640, -636, -632, -628,
  -624, -620, -616, -612, -608, -604, -596, -592, -588, -584,
  ... 384 more items
] */


