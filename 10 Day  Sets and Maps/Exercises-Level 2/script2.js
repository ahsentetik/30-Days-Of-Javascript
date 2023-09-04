const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// 1
const c = [...a, ...b];
let aUnionB = new Set(c);

// 2 
let A = new Set(a);
let B = new Set(b);

let x = a.filter(e => B.has(e));
let C = new Set(x);
C.forEach(x => console.log(x));

// 3  
let result = a.filter(x => !B.has(x));
let aDiffB = new Set(result);
aDiffB.forEach(x => console.log(x));

