
// console.log("Number :" ,100);
// console.log(100..toString());
// console.log(100.500.toString());
// console.log("================================================");
// console.log(100.5555555.toFixed(3));
// console.log(parseFloat(100.5555555));
// console.log(parseInt(100.5555555));

// console.log(parseFloat(" mahmoud 100.5555555"));
// console.log(parseInt("100.5555555 mahmoud "));
// console.log("================================================");
// console.log(Number.isInteger(100));
// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.500));  
// console.log("================================================");
// console.log(Number.isNaN(100));
// console.log(Number.isNaN("Mahmoud"));
// console.log(Number.isNaN(NaN));
// console.log("================================================");
// console.log("=================Math Object====================");
// console.log("================================================");
// console.log(Math.round(5.7));
// console.log(Math.round(5.3));
// console.log(Math.ceil(9.7));
// console.log(Math.floor(9.3));
// console.log(Math.min(115 ,5 ,-5 ,- 55 , 86));
// console.log(Math.max(115 ,5 ,-5 ,- 55 , 86));
// console.log(Math.pow(5,2));
// console.log(Math.random(5));
// console.log(Math.trunc(99.6));

console.log("==================Challange====================");
/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a,b,c,d));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,Math.floor(d))); // 10000 

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Valus
console.log(((Math.trunc(b)/Math.ceil(d)).toFixed(2)).toString()); // 66.67 => String   
console.log(Math.ceil(Math.trunc(b)/Math.ceil(d))); // 67 => Number
