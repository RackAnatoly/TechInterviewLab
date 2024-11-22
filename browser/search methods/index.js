// Level 3
const parent = document.querySelector('.parent');
const children = parent.children;
const firstChild = parent.firstElementChild;
console.log(children.length);

/* HTML:
<div class="parent">
    <div>First</div>
    <div>Second</div>
</div>
*/

// Output:
// 2

// Level 4
const complex = document.querySelector('div.class1:not(.class2)');
const nearest = document.querySelector('div:first-child + div');
console.log(complex, nearest);

/* HTML:
<div class="class1">First</div>
<div class="class1 class2">Second</div>
*/

// Output:
// <div class="class1">First</div> null