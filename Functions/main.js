// function details(userName = null, userAge = null, userSalary = null){
//     document.write(`Hello, i'm ${userName} and i'm ${userAge} years old, and my salary is ${userSalary}`);
//     return null;
// }
// details();

// function randomYear(start = 0, end = 100){
//     let randomnumber = start + Math.floor(Math.random()*(end - start + 1));
//     // return Math.ceil(Math.random()*100);
//     return randomnumber;
// }

// let count = 0 ;
// let arr = [];
// while(count < 100){
//     arr.push(randomYear());
//     count++
// }
// console.log(arr.sort());
// console.log(randomYear(5000,10000));

// function sum(...numbers){
//     let result = null;
//     for(let i = 0 ; i < numbers.length ; i++){
//         result += numbers[i];
//     }
//     return result;
// }
// console.log(sum(1,1,10,10,10));

// // HTML CODE
// let details = {name:"",age:null};
// function regName(){
//     details.name = document.getElementById("userName").value;
// }
// function regAge(){
//     details.age = document.getElementById("userAge").value;
// }
// function showDetails(){
//     document.write(`<h2> user data is : <h2>`);
//     document.write(`
//         <div>
//             <p> user name is : ${details.name}</p>
//             <p> user Age is : ${details.age}</p>
//         </div>
//         `);
// }


// console.log("================Challange================");
// let user = ["",0,true];
// function showdetails(...details){
//     for(let i = 0; i < 3 ; i++){
//         typeof details[i] === "string" 
//             ? user[0] = details[i]
//             : typeof details[i] === "number"
//             ? user[1] = details[i]
//             : typeof details[i] === "boolean"
//             ? user[2] = details[i]:null
//     }
//     user[2] === true ? user[2] = "you are Available for hire" : user[2] = "you are Not Available for hire"  ;
//     console.log(`Hello ${user[0]}, Your Age Is ${user[1] +", " + user[2]}`);
//     return null;
// }
// showdetails("mahmoud", 25 , true);  
// showdetails( true, "osama", 30);  
// showdetails( 20 , false, "mona");  
// console.log("=========================================");


console.log("====================Function Arrow Challenges=====================");


/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...Names) {
//   return `String [${Names.join("], [")}] => Done`;
// };

let names = (...Names) => `String [${Names.join("], [")}] => Done`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// Output : String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + Math.min(...nums);

console.log(calc(20, 50, 10, 60)); // 80






















