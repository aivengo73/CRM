"use strict";
// Вторая задача:

// Напишите функцию getAverageValue
// для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа

// С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = allCashbox.reduce((accum, item) => accum = accum + item);

const meanValue = Math.floor(getAverageValue / allCashbox.length);
console.log(meanValue); // 4087




