

// Level 3
document.cookie = "name=John; secure; samesite=strict";
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    console.log(parts.pop().split(';').shift());
}
getCookie('name');

// Output:
// "John"

// Level 4
const cookieObj = {
    set(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
    }
};
cookieObj.set('sessionId', '123', 7);
console.log(document.cookie);

// Output:
// "sessionId=123"