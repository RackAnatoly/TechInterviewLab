// Level 1
const obj = {
    value: 42,
    getValue() {
        return this.value;
    }
};
const getFn = obj.getValue;
console.log(obj.getValue());
console.log(getFn());

// Output:
// 42
// undefined

// Level 2
function greet() {
    return `Hello, ${this.name}!`;
}
const person = { name: 'John' };
console.log(greet.call(person));
console.log(greet.apply(person));

// Output:
// "Hello, John!"
// "Hello, John!"

// Level 3
const user = {
    name: 'Alice',
    sayHi() {
        setTimeout(function() {
            console.log('Hi, ' + this.name);
        }.bind(this), 100);
    }
};
user.sayHi();

// Output:
// "Hi, Alice"

// Level 4
class Component {
    constructor(name) {
        this.name = name;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this.name);
    }
}
const comp = new Component('Button');
const click = comp.handleClick;
click();

// Output:
// "Button"