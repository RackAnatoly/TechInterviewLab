//Level 1:
let x = 1;
{
 let x = 2;
 console.log(x);  
}
console.log(x);    

for(var i=0; i<3; i++) {
 setTimeout(() => console.log(i), 0);  
}

// Output:
// 2
// 1
// 3
// 3 
// 3


//Level 2:
const obj = { a: 1, b: 2 };
const { a, ...rest } = { ...obj, c: 3 };
console.log(rest);  

const arr = [1,2,3,4];
console.log(arr.reduce((acc, cur) => {
  if(cur % 2 === 0) acc.push(cur * 2);
  return acc;
}, []));  

// Output:
// { b: 2, c: 3 }
// [4, 8]


//Level 3:
const user = {
    name: 'John',
    greet: () => console.log(this.name),
    greet2() { console.log(this.name) }
  };
  const { greet, greet2 } = user;
  greet();   
  greet2();  
  
  // Output:
  // undefined
  // undefined

//Level 3:
const nested = [1, [2, 3, [4, 5]]];
console.log(nested.flat());      
console.log(nested.flat(2));     

const entries = [['a', 1], ['b', 2]];
const obj = Object.fromEntries(entries);
console.log(Object.entries(obj)); 

// Output:
// [1, 2, 3, [4, 5]]
// [1, 2, 3, 4, 5] 
// [['a', 1], ['b', 2]]