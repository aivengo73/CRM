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

// const getAveragePriceGoods = array => {
//   const sumOfAverages = array.reduce((acc, cur) => acc + (cur[1] / cur[0]), 0);

//   return (sumOfAverages / array.length).toFixed(2);
// }

// console.log('AveragePriceGoods', getAveragePriceGoods(allCashbox));

// Задача 2

//count - колличество стульев, Найдём их общее колличество

const scientists = [
	{
		name: 'mendeleeev',
		count: 3,
	},
	{
		name: 'ariStotle',
		count: 5,
	},
	{
		name: 'tesla',
		count: 4,
	}
];

const newItem = scientists.reduce((accum, item, i, arr) => {

return accum += item.count
	
}, 0)
console.log(newItem);

