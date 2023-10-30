'use strict';

// ﻿Вторая задача:

// ✔ Выполняем в файле tasksHard_2.js

// Во многих странах иная прогрессивная шкала налогообложения и вычисляется она более сложным способом: 


// Налоговая ставка 13% на доход до 15 000 ₽

// Налоговая ставка 20% на доход выше 15 000 ₽ означает, что 20% уплачивается не со всей суммы, а лишь с той части, которая превосходит 15 000 ₽, но не выше 50 000 ₽

// Налоговая ставка 30% на доход выше 50 000 ₽ означает, что 30% уплачивается не со всей суммы, а лишь с той части, которая превосходит 50 000 ₽.

// Напишите программу, которая корректно сможет посчитать налог и вывести сумму налога в консоль.

const userIncomes = +prompt('Введите сумму Вашего месячного дохода', '');
let amountIssueds = 0;

if (Number.isFinite(userIncomes) && userIncomes != ' ' && userIncomes >= 0 && userIncomes <= 15000) {

	console.log('К Вам будет применён налог в размере 13%');
	amountIssueds = userIncomes / 100 * 13;
	console.log(`Ваш налог составит ${amountIssueds} рублей`)
}

else if (Number.isFinite(userIncomes) && userIncomes != ' ' && userIncomes >= 15000 && userIncomes <= 50000) {

	console.log('К Вам будет применён налог в размере 20% на остаток превышающий сумму 15000 рублей');
	amountIssueds = (userIncomes - 15000) / 100 * 20;
	console.log(`Ваш налог составит ${amountIssueds} рублей`)

} else if(Number.isFinite(userIncomes) && userIncomes != ' ' && userIncomes > 50000) {

	console.log('К Вам будет применён налог в размере 30% на остаток превышающий сумму 50000 рублей');
	amountIssueds = (userIncomes - 50000) / 100 * 30;
	console.log(`Ваш налог составит ${amountIssueds} рублей`);

} else {
console.log('Введите сумму Вашего месячного дохода');

};