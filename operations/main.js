let a = 2 ;
let b = 5 ;
let c = 11 ;

console.log(a + b) ;                             //7
console.log(b - a) ;                             //3
console.log(a * b) ;                             //10
console.log(a / b) ;                             //0.4

console.log(c % a) ;                             //1
console.log(c % b) ;                             //1
console.log(a ** b) ;                            //32

console.log(`b = ${b}`);                         //b = 5
console.log("Post Increment : b =" , b++);       //b = 5 print frist then add
console.log(`b = ${b}`);                         //b = 6
console.log("pre Increment  : b =" , ++b);       //b = 7 add frist then print

console.log(`c = ${c}`);                         //c = 11
console.log("Post decrement : C =" , c--);       //c = 11 print frist then sub 
console.log(`c = ${c}`);                         //c = 10
console.log("pre decrement  : c =" , --c);       //c = 9  sub frist then print

a += 1;
console.log(a);
a -= 1;
console.log(a);
b /= 2;
console.log(b);
b *= 2;
console.log(b);


console.log("Unary Operators + / -");
console.log("Unary plus +");
console.log(+50);
console.log(+"50");
console.log(+"-50");
console.log(+"Ali");
console.log(+50.5);
console.log(+0x32);
console.log(+null);
console.log(+true);
console.log(+false);
console.log(+[50,"50","ali"]);
console.log(+{name : "mahmoud", age : 25 , date : "1052001"});

console.log("Unary negative -");
console.log(-50);
console.log(-"50");
console.log(-"-50");
console.log(-"Ali");
console.log(-50.5);
console.log(-0x32);
console.log(-null);
console.log(-true);
console.log(-false);
console.log(-[50,"50","ali"]);
console.log(-{name : "mahmoud", age : 25 , date : "1052001"});
