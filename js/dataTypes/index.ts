// Level 1
console.log(typeof null);
console.log([1,2,3] == [1,2,3]);

// Output:
// "object"
// false

// Level 2
let num = 5;
console.log(num.toString());
console.log(num == '5');

// Output:
// "5"
// true

// Level 3
let x = '123';
let y = +x;
console.log(typeof x, typeof y);

// Output:
// "string" "number"


// Level 4
console.log([] + {});
console.log({} + []);

// Output:
// "[object Object]"
// 0