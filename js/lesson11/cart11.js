'use strict';

/* Задача #2

Продолжим работу в cart.js из предыдущего урока

Методы объекта cart не должны обращаться к объекту по имени
В объект cart добавьте сеттер setDiscount и свойство discount
Сеттер setDiscount будет принимать promocode
если promocode будет строка METHED, то в discount будет добавляться значение 15
если promocode будет строка NEWYEAR, то в discount будет добавляться значение 21
метод calculateItemPrice должен учитывать скидку равную
 процентному значению discount */

const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set Discount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  add(name, price, amount = 1) {
    const goods = {
      name,
      price,
      amount,
    };
    this.items.push(goods);
    this.increaseCount(amount);
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    const check = this.items.reduce((sum, item) => sum + item.price * item.amount, 0);
    return check * (1 - this.discount / 100);
  },

  clear() {
    this.count = 0;
    this.items = [];
  },

  print() {
    console.log(JSON.stringify(cart.items));
    console.log(`TotalPrice: ${this.totalPrice}`); // 19481.4
  },
};
cart.Discount = 'NEWYEAR';
cart.add('часы', 5, 20);
cart.add('коньки', 23, 10);
cart.add('Мяч', 15, 12);
cart.add('лыжи', 345, 70);

cart.print();
console.log(cart);
/* return this.items.reduce((sum, item) =>
sum + item.price * item.amount * (1 - this.discount / 100), 0);*/
