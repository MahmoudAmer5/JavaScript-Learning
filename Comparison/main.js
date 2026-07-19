// console.log("======================================================");
// console.log(10 == 10);      
// console.log(10 == "10");    
// console.log(10 != 10);      
// console.log(10 != 10);      
// console.log("=========================");
// console.log(10 === 10); 
// console.log(10 === 20);
// console.log(10 === "10");
// console.log(10 !== 10);
// console.log(10 !== "10");
// console.log(10 !== 20);
// console.log(10 !== "20");
// console.log(typeof 10 === typeof 20);
// console.log(typeof "b" === typeof "a");
// console.log("=========================");
// console.log(10 > 20);
// console.log(10 >= 10);
// console.log(10 <= 10);
// console.log(10 < 20);
// console.log("======================================================");
// console.log(!(10 == 10));
// console.log(!false);
// console.log("=========================");
// console.log(10 == 10 && 10 >= 5);
// console.log(10 == 10 && 10 >= 5 && !true);
// console.log("=========================");
// console.log(10 == 10 && 10 >= 5);
// console.log(10 == 10 || 10 >= 5 || !true);
// console.log("=========================");
// console.log(10 == 10 && 10 == 5 || !true);
// console.log(10 == 10 || 10 == 5 && !true);
// console.log("======================================================");

// let price = 1000 ;
// let discountState = true ;
// let discount = 0.15 ;
// let country = "Japan"; 
// let age = 20 ;
// if(discountState){
//     price *= (1 - discount);
//     if(country === "Japan"){
//         price *= (1 - 0.2);}}
// else if (age == 20){
//     price *= (1 - 0.10);
//     if(country === "Japan"){
//         price *= (1 - 0.2);}}
// else {
//     price *= 1.1;}

// if(){}
// console.log(price);
console.log("======================================================");
// let name = "Mahmoud" ,gender = "male" ;
// let name = "Mona" , gender = "female";
// let pronouns = gender === "male" ? "Mr" : "Mrs" ;
// document.write(`Hello ${pronouns} ${name}`);
// document.write(`Hello ${gender === "male" ? "Mr" : "Mrs"} ${name} `);
// let grade = 66.6 ;

// typeof grade != typeof 0 ||  grade < 0 || grade > 100   
//     ? document.write("Wrong Data Entered")
//     : grade >= 0  && grade < 45
//     ? document.write("Failed")
//     : grade >= 45 && grade < 65
//     ? document.write("poor")
//     : grade >= 65 && grade < 75
//     ? document.write("good")
//     : grade >= 75 && grade < 85
//     ? document.write("very good")
//     : grade >= 85 && grade <= 100
//     ? document.write("excellent")
//     : null ; 

// switch(true){
//     case (typeof grade != typeof 0 ||  grade < 0 || grade > 100):
//         document.write("Wrong Data Entered")
//     break;
//     case (grade >= 0  && grade < 45):
//         document.write("Failed")
//     break;
//     case (grade >= 45 && grade < 65):
//         document.write("poor")
//     break;
//     case (grade >= 65 && grade < 75):
//         document.write("good")
//     break;
//     case (grade >= 75 && grade < 85):
//         document.write("very good")
//     break;
//     case (grade >= 85 && grade <= 100):
//         document.write("excellent")
//     break;
// }

console.log("======================Challange=======================");

// let job = "Designer";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// // }

// switch (job) {
//     case "Manager" :
//         salary = 8000;
//         break;
//     case "IT" :
//     case "Support" :
//         salary = 6000;
//         break;
//     case "Developer" :
//     case "Designer" :
//         salary = 4000;
//         break;
// }
// document.write(salary);
/*
  If Challenge
*/

let holidays = 3;
let money = 0;

if(holidays === 0){
    money = 5000;
    console.log(`My Money is ${money}`);
}
else if(holidays === 1 || holidays === 2){
    money = 3000;
    console.log(`My Money is ${money}`);
}
else if(holidays === 3){
    money = 2000;
    console.log(`My Money is ${money}`);
}
else if(holidays === 4){
    money = 1000;
    console.log(`My Money is ${money}`);
}
else if(holidays === 5){
    money = 0;
    console.log(`My Money is ${money}`);
}
else{
    money = 0;
    console.log(`My Money is ${money}`);
}


// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

