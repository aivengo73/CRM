'use strict';

// Задачи:

// Первая задача:

// ✔ Выполняем в файле tasksHard_1.js
// Необходимо написать программу для вычисления налога по прогрессивной шкале в зависимости от полученного заработка:

// 13% на доход до 15 000 ₽

// 20% на доход от 15 000 ₽ до 50 000 ₽

// 30% на доход выше 50 000 ₽

// Запросить у пользователя доход и вывести в консоль сумму налога



const userIncome = +prompt('Введите сумму Вашего месячного дохода', '');
let amountIssued = 0;

if (Number.isFinite(userIncome) && userIncome != ' ' && userIncome >= 0 && userIncome <= 15000) {

	console.log('К Вам будет применён налог в размере 13%');
	amountIssued = userIncome / 100 * 13;
	console.log(`Ваш налог составит ${amountIssued} рублей`)
}
else if (Number.isFinite(userIncome) && userIncome != ' ' && userIncome >= 15000 && userIncome <= 50000) {

	console.log('К Вам будет применён налог в размере 20%');
	amountIssued = userIncome / 100 * 20;
	console.log(`Ваш налог составит ${amountIssued} рублей`)

} else if(Number.isFinite(userIncome) && userIncome != ' ' && userIncome > 50000) {

	console.log('К Вам будет применён налог в размере 30%');
	amountIssued = userIncome / 100 * 30;
	console.log(`Ваш налог составит ${amountIssued} рублей`);

} else {
console.log('Введите сумму Вашего месячного дохода');

};
