// Level 1
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
for(let key in obj) {
    console.log(key);
}

// Output:
// ["a", "b"]
// [1, 2]
// "a"
// "b"

// Level 2
const arr = [1, 2, 3];
arr.map(x => x * 2);
arr.forEach(x => console.log(x));

// Output:
// 1
// 2
// 3

// Level 3
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter(x => x > 2));
console.log(numbers.find(x => x > 2));
console.log(numbers.includes(3));

// Output:
// [3, 4, 5]
// 3
// true

// Level 4
const original = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(original));
const sorted = [3, 1, 2].sort();
console.log(clone);
console.log(sorted);

// Output:
// { a: 1, b: { c: 2 } }
// [1, 2, 3]