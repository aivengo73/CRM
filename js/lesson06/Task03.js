'use strict';

// Третья задача:

// Напишите функцию addPrefix 
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически

// Входящий массив:

// const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

// Вызов функции:
// addPrefix(names, 'Mr')

// Результат функции:

// ['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr. Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander'];

             /* 1 */

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

function addPrefix(names, prefix ) {
	const arr = [];

	for (let i = 0; i < names.length; i++) {
		arr[i] = `${prefix} ${names[i]}`;
	}
	return arr;
}
const res = addPrefix(names, 'Mr');
console.log(res); /* ["Mr Noah","Mr Liam","Mr Mason","Mr Jacob","Mr Robot","Mr William","Mr Ethan","Mr Michael","Mr Alexander"] */



            /* 2 */

function addPrefix1(names, prefix) {

 return names.map(names => `${prefix} ${names}`);
	
}

const pref = addPrefix1(names,'Mr');
console.log(pref); /* [
  'Mr  Noah',
  'Mr  Liam',
  'Mr  Mason',
  'Mr  Jacob',
  'Mr  Robot',
  'Mr  William',
  'Mr  Ethan',
  'Mr  Michael',
  'Mr  Alexander'
]
*/
