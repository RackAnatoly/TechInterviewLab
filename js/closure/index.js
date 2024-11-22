// Level 1
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());

// Output:
// 1
// 2

// Level 2
function createCache() {
    const cache = {};
    return function(n) {
        if (n in cache) {
            return `From cache: ${cache[n]}`;
        }
        cache[n] = n * 2;
        return `Calculated: ${cache[n]}`;
    };
}
const cache = createCache();
console.log(cache(5));
console.log(cache(5));

// Output:
// "Calculated: 10"
// "From cache: 10"

// Level 3
function createElement() {
    let element = document.createElement('div');
    return function() {
        return element;
    };
}
const el = createElement();
// Potential memory leak - element never garbage collected

// Level 4
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const add2 = x => x + 2;
const multiply3 = x => x * 3;
const pipeline = pipe(add2, multiply3);
console.log(pipeline(5));

// Output:
// 21