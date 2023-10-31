'use strict';


// Напишите функцию getAveragePriceGoods
// для получения средней цены товара
// Дан многомерный  массив:

// const allCashbox = [
//   [12, 4500], 
//   [7, 3210], 
//   [4, 650], 
//   [3, 1250], 
//   [9, 7830], 
//   [1, 990], 
//   [6, 13900], 
//   [1, 370]
// ];

// В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
// Необходимо посчитать среднюю стоимость одного товара в магазине.

const allCashbox = [
	[12, 4500],
	[7, 3210],
	[4, 650],
	[3, 1250],
	[9, 7830],
	[1, 990],
	[6, 13900],
	[1, 370]
];

/* Переиндексируем массив и получим упрощённый вариант массива */
let array = allCashbox.reduce((accum, item, i) => {
	accum.push(allCashbox[i][1] * allCashbox[i][0]);
	return accum
}, []);
console.log(array); /* [54000, 22470, 2600, 3750, 70470, 990, 83400, 370] */

/* Посчитаем среднюю стоимость одного товара в магазине. */
function getAveragePriceGoods() {
	let sum = 0;
	let items = 0;
	let num = [];
/* общая стоимость товаров */
	for (let i = 0; i < array.length; i++) {
		sum = sum + array[i];                       // 238050
	}
/* общее колличество товаров */
	 for (let j = 0; j < allCashbox.length; j++) {
		num.push(allCashbox[j][0]);
		items += num[j];                            // 43
	 }
/*  средняя стоимость одного товара */
	sum = Math.round(sum / items);
	return sum;
}
let res = getAveragePriceGoods(array); 
console.log('Средняя стоимость одного товара:', res); // 5536