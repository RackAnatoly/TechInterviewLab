// Level 1
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        return `${this.brand} is starting`;
    }
}
const car = new Car('Toyota');
console.log(car.start());

// Output:
// "Toyota is starting"

// Level 2
class ElectricCar extends Car {
    constructor(brand, battery) {
        super(brand);
        this.battery = battery;
    }
}
const tesla = new ElectricCar('Tesla', '100kWh');
console.log(tesla.brand, tesla.battery);

// Output:
// "Tesla" "100kWh"

// Level 3
class Bank {
    #balance = 0;
    get balance() {
        return `$${this.#balance}`;
    }
    deposit(amount) {
        this.#balance += amount;
    }
}
const account = new Bank();
account.deposit(100);
console.log(account.balance);

// Output:
// "$100"

// Level 4
class Animal {}
class Dog extends Animal {}
const dog = new Dog();
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);

// Output:
// true
// true