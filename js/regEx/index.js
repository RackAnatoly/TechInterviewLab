// Level 1
const text = "Hello 123 World";
const hasNumbers = /\d+/.test(text);
console.log(hasNumbers);

// Output:
// true

// Level 2
const pattern = /hello/i;
console.log(pattern.test("Hello"));
console.log(pattern.exec("Hello World"));

// Output:
// true
// ["Hello", index: 0, input: "Hello World", groups: undefined]

// Level 3
const regex1 = /world/i;
const regex2 = new RegExp('world', 'i');
console.log(regex1.test("World"));
console.log(regex2.test("World"));

// Output:
// true
// true

// Level 4
const complexPattern = /[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
console.log(complexPattern.test("user@example.com"));

// Output:
// true