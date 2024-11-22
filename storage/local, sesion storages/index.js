// Level 1
localStorage.setItem('user', 'John');
console.log(localStorage.getItem('user'));
sessionStorage.setItem('temp', 'value');

// Output:
// "John"

// Level 2
// localStorage persists, sessionStorage is temporary
localStorage.setItem('permanent', 'stays');
sessionStorage.setItem('temporary', 'goes');
console.log({
    local: localStorage.getItem('permanent'),
    session: sessionStorage.getItem('temporary')
});

// Output:
// { local: "stays", session: "goes" }

// Level 3
try {
    localStorage.setItem('key', 'value');
    console.log(localStorage.getItem('key'));
    localStorage.removeItem('key');
    localStorage.clear();
    console.log(localStorage.length);
} catch(e) {
    console.log('Storage error:', e);
}

// Output:
// "value"
// 0

// Level 4
window.addEventListener('storage', (e) => {
    console.log({
        key: e.key,
        oldValue: e.oldValue,
        newValue: e.newValue,
        url: e.url
    });
});
localStorage.setItem('test', 'value'); // In another window/tab

// Output (in other windows):
// {
//     key: "test",
//     oldValue: null,
//     newValue: "value",
//     url: "http://..."
// }