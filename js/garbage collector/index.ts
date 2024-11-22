// Level 4
const cache = new WeakMap();
let object = { data: 'cached' };
cache.set(object, 'metadata');
object = null; 


//Proper memory management using WeakMap