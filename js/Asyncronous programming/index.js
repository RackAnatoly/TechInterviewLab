// Level 1
console.log('Start');
for(let i = 0; i < 1000000000; i++) {}
console.log('End');

// Output:
// "Start"
// "End" (after delay)

// Level 2
console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');

// Output:
// "First"
// "Third"
// "Second"

// Level 3
setTimeout(() => console.log('A'), 0);
Promise.resolve().then(() => console.log('B'));
console.log('C');

// Output:
// "C"
// "B"
// "A"

// Level 4
Promise.resolve().then(() => console.log('Micro'));
setTimeout(() => console.log('Macro'), 0);
queueMicrotask(() => console.log('Microtask'));

// Output:
// "Micro"
// "Microtask"
// "Macro"