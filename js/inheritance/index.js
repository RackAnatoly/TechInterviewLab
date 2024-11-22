// Level 1
function Animal(name) {
    this.name = name;
 }
 Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
 }
 const dog = new Animal('Dog');
 console.log(dog.speak());
 
 // Output:
 // "Dog makes a sound"
 
 // Level 2
 let person = {
    name: 'John'
 };
 let employee = {
    role: 'Developer'
 };
 employee.__proto__ = person;
 console.log(employee.name);
 
 // Output:
 // "John"
 
 // Level 3
 function Parent() {}
 Parent.prototype.parentMethod = function() {};
 function Child() {}
 Child.prototype = Object.create(Parent.prototype);
 console.log(Child.prototype.constructor);
 
 // Output:
 // [Function: Parent]
 
 // Level 4
 const obj = Object.create(null);
 console.log(obj.toString);
 
 // Output:
 // undefined