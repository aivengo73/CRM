'use strict';

// Первая задача:

// Выведите в консоль таблицу степеней от 1 до 10 по аналогии как в уроке выводится таблица умножения


function pow() {

	for (let i = 1; i <= 10; i++) {

		console.log('----------------');

		for (let j = 1; j <= 10; j++) {
	
				console.log(`${i} ** ${j} = ${i ** j}`) ;
		}

	}
}
 pow();
