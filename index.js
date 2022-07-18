var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Tom');
var dog = new Dog('Tho');

var tom = new Cat();
var tho = new Cat();

dog.eat(tom);
dog.eat(tho);
console.log(dog);