'use strict';

// Третья задача:

// Напишите функцию, которая принимает строку и возвращает обратную строку

// Пример: "Привет мир" => "рим тевирП"

const reversString = (string) => {
	return string.split('').reverse().join('');
};
console.log(reversString('Привет мир'));
