'use strict';

// Первая задача:


// Напишите функцию filter()

// функция принимает в параметрах 2 массива

// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.

// Пример: const allStudents = ['Иванов','Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
//         const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];


// const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

// const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
// Результат функции: массив из всех студентов, которые сдали экзамен.


let allStudents = ['Иванов','Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
let failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

function filter() {

	let arr  = allStudents.filter(item => !failedStudents.includes(item)); 
	return arr;
}
let res = filter(allStudents, failedStudents);
console.log(res);

