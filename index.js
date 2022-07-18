var Cat = require(./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat();
var Mouse = new Mouse('Mickey');
var Dog = new Dog();
try {
	cat.eat(dog);
} catch (error) {
	console.log('Error while cat is eating a dog');
}

console.log(cat);