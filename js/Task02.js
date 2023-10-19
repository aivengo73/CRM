'use strict';

// Вторая задача:

// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие


// Пример:  "привет Мир" => "Привет мир"

const string = "привет Мир";
let newString = '';

function modifyString(string) {

 newString =  string.toLowerCase().split('');
 newString[0] = newString[0].charAt(0).toUpperCase();

	return newString.join('');
}

const res = modifyString("привет Мир");
console.log(res);
