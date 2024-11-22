// Level 1
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done"), 1000);
});
console.log(promise); // Immediately
setTimeout(() => console.log(promise), 2000); // After resolution

// Output:
// Promise { <pending> }
// Promise { <fulfilled>: "Done" }

// Level 2
function callbackStyle(cb) {
    setTimeout(() => cb("data"), 1000);
}
async function promiseStyle() {
    return "data1";
}
callbackStyle(console.log);
promiseStyle().then(console.log);

// Output:
// "data1"
// "data"

// Level 3
const failingPromise = Promise.reject("Error")
    .catch(err => console.log('Caught:', err))
    .finally(() => console.log('Cleanup'));

// Output:
// "Caught: Error"
// "Cleanup"

// Level 4
async function example() {
    try {
        const result = await Promise.reject("Fail");
    } catch (error) {
        console.log("Handled:", error);
    }
}
example();

// Output:
// "Handled: Fail"