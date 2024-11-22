// Level 1
const button = document.querySelector('button');
button.addEventListener('click', () => console.log('Clicked!'));
button.click();

// Output:
// "Clicked!"

// Level 2
document.body.addEventListener('click', function(e) {
    console.log(e.type, e.target.tagName);
});
const button2 = document.querySelector('button');
button2.click();

// Output:
// "click" "BUTTON"

// Level 3
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Link clicked');
});


// Output:
// "Link clicked"

// Level 4
const list = document.querySelector('ul');
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('Clicked on:', e.target.textContent);
        e.stopPropagation();
    }
});


// Output when clicking "Item 1":
// "Clicked on: Item 1"