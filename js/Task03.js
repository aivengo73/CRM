'use strict';

// Третья задача:

// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
// В качестве аргументов функция принимает 3 параметра:
// Общая сумма корзины
// Количество товаров в корзине
// Промокод
// Правила и порядок (порядок важен!) начисления скидок:
// Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
// Если промокод равен "METHED", то скидка 10%
// Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

// Порядок применения скидок должен соблюдаться

let discont = 0;

function calculate(totalSum, quantity, promocode) {
	let discont1 = 0;
	let discont2 = 0;
	let discont3 = 0;
	let discont4 = 0;

	// Скидка 3% при количестве товаров больше 10
	if (quantity > 10) {
		discont = (totalSum * 0.03).toFixed(2) * 1;
		totalSum = (totalSum - discont).toFixed(2) * 1;
		discont1 = discont;
		console.log("discont1:", discont1);
		console.log(`Сумма1 со скидкой: ${totalSum} руб.`);

	}

	// Скидка 15% при сумме, превышающей 30 000 к сумме превышения
	if (totalSum > 30000) {
		discont = ((totalSum - 30000) * 0.15).toFixed(2) * 1;
		totalSum = (totalSum - discont).toFixed(2) * 1;
		discont2 = discont;
		console.log("discont2:", discont2);
		console.log(`Сумма2 со скидкой: ${totalSum} руб.`);
	}

	// Проверка промокода "METHED"
	if (promocode === 'METHED') {
		discont = (totalSum * 0.1).toFixed(2) * 1;
		totalSum = (totalSum - (totalSum * 0.1)).toFixed(2) * 1;
		discont3 = discont;
		console.log("discont3:", discont3);
		console.log(`Сумма3 со скидкой: ${totalSum} руб.`);

	}

	// Проверка промокода "G3H2Z1"
	if (promocode === 'G3H2Z1' && totalSum > 2000) {
		discont4 = 500;
		totalSum = ((totalSum - 500)).toFixed(2) * 1;
		console.log("discont4:", discont4);
		console.log(`Сумма4 со скидкой: ${totalSum} руб.`);
	}

	let discontTotal = (discont1 + discont2 + discont3 + discont4).toFixed(2) * 1;
	console.log(`Общий discont: ${discontTotal} руб.`);

	return totalSum;
}

let resultSum = calculate(963067.23, 45, 'METHED');
console.log(`Общая сумма к оплате: ${resultSum} руб.`);



/* 1. totalSum, quantity, promocode: ( 1781.54, 9, 'G3H2Z1' );

			 Общий discont: 0 руб.
			 Общая сумма к оплате: 1781.54 руб.  */


/* 2. totalSum, quantity, promocode: ( 54781.76, 9, 'METHED' );

			discont1: 1643.45
			Сумма1 со скидкой: 53138.31 руб.
			discont2: 3470.75
			Сумма2 со скидкой: 49667.56 руб.
			discont3: 4966.76
			Сумма3 со скидкой: 44700.8 руб.

			Общий discont: 10080.96 руб.
			Общая сумма к оплате: 44700.8 руб.   */


/* 3. totalSum, quantity, promocode: ( 34560, 11, 'G3H2Z1' );

			discont1: 1036.8
			Сумма1 со скидкой: 33523.2 руб.
			discont2: 528.48
			Сумма2 со скидкой: 32994.72 руб.
			discont4: 500
			Сумма4 со скидкой: 32494.72 руб.

			Общий discont: 2065.28 руб.
			Общая сумма к оплате: 32494.72 руб.  */


/* 4. totalSum, quantity, promocode: ( 963067.23, 45, 'METHED' );

      discont1: 28892.02
      Сумма1 со скидкой: 934175.21 руб.
      discont2: 135626.28
      Сумма2 со скидкой: 798548.93 руб.
      discont3: 79854.89
      Сумма3 со скидкой: 718694.04 руб.

      Общий discont: 244373.19 руб.
      Общая сумма к оплате: 718694.04 руб.   */