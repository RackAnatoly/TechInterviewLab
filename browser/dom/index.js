// Level 2
const parent = document.createElement('div');
const child = document.createElement('span');
parent.appendChild(child);
console.log(parent.innerHTML);

// Output:
// "<span></span>"

// Level 3
const list = document.querySelector('ul');
const firstChild = list.firstElementChild;
const siblings = list.children;
console.log(siblings.length);

/* HTML Structure:
<ul>
    <li>First</li>
    <li>Second</li>
</ul>
*/

// Output:
// 2

// Level 4
const deepNested = document.querySelector('.deep');
console.log(deepNested.closest('div'));
const allNodes = document.querySelectorAll('*');
console.log(allNodes.length);

/* HTML Structure:
<div>
    <span class="deep">Text</span>
</div>
*/

// Output:
// <div>...</div>
// 2