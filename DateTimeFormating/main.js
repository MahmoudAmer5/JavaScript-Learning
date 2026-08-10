// 159
// let dateNow = new Date();
// console.log(dateNow);
// console.log(Date.now());
// let sec = Date.now() / 1000 ;
// let min = sec / 60 ;
// let hours = min / 60 ;
// let days = hours / 24 ;
// let years = days / 365;
// console.log(`Number of Seconds : ${sec}`);
// console.log(`Number of Minutes : ${min}`);
// console.log(`Number of Hours : ${hours}`);
// console.log(`Number of Days : ${days}`);
// console.log(`Number of years : ${years}`);

// 160
// let dateNow = new Date();
// let bd = new Date("May 10 2001");
// let Age = dateNow - bd ;
// console.log(dateNow);
// console.log(bd);
// console.log(`my age is ${dateNow.getFullYear() - bd.getFullYear()}`);
// console.log(dateNow.getTime());
// console.log(dateNow.getDate());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());

// 161
// let datenow = new Date();
// // datenow.setTime(1_000_000_000_000);
// // datenow.setDate(0);
// // datenow.setDate(-1);
// // datenow.setDate(50);
// // datenow.setMonth(4);
// // datenow.setMonth(-3);
// // datenow.setMonth(15);
// // datenow.setFullYear(1);
// // datenow.setFullYear(-1);
// // datenow.setFullYear(2000);
// let myBD = new Date();
// myBD.setFullYear(2001,4,10);
// console.log(datenow);
// console.log(myBD);
// console.log("=================================================")

// 162
// let date1 = new Date("May 10 2001");
// console.log(Date.parse("oct 9 2005"));
// let date2 = new Date(1128808800000);
// let date3 = new Date("5-6-2006");
// let date4 = new Date("8$9%2015");
// let date5 = new Date(1958,11,5,8,10);
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
// console.log(date5);

// 163
// // let start = new Date();
// let start = performance.now();
// for(let i = 0 ; i < 10000 ; i++){
//     // 30
//     // document.write(`<div>${i}</div>`);
//     // 20 ~ 25
//     let div = document.createElement("div");
//     div.appendChild(document.createTextNode(i));
//     document.body.appendChild(div); 
// }
// // let end = new Date();
// let end = performance.now();
// let duration = end - start;
// console.log(start);
// console.log(end);
// console.log(duration);

// 164
// function* generateNum(){
//     console.log("1 - Block of code");
//     let x = 3;
//     yield 1;
//     console.log("2 - Block of code");
//     yield 2;
//     console.log("3 - Block of code");
//     yield x;
// }
// let Instance = generateNum();

// console.log(generateNum());
// console.log(Instance);
// console.log(typeof generateNum());
// console.log(typeof Instance);
// console.log("#".repeat(50));
// // console.log(Instance.next());
// // console.log(Instance.next());
// // console.log(Instance.next());
// // console.log(Instance.next());
// // console.log(Instance.next());
// // for(let value of generateNum()){
// //     console.log(value);
// // }
// for(let value of Instance){
//     console.log(value);
// }

// 165
// function* geneNum(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// function* geneStr(){
//     yield "a";
//     yield "b";
//     yield "c";
// }
// function* geneAll(){
//     yield* geneNum();
//     yield* geneStr();
//     yield* [4,5,6];
// }
// let generator = geneAll();
// console.log(generator.next());  // 1
// console.log(generator.next());  // 2
// console.log(generator.next());  // 3
// console.log(generator.next());  // a
// // console.log(generator.return("Returned"));
// console.log(generator.next());  // b
// console.log(generator.next());  // c
// console.log(generator.next());  // 4 if yield | [4,5,6] if yield *
// console.log(generator.next());  // 5
// console.log(generator.next());  // 6
// console.log(generator.next());  
// console.log(generator.next());  

// 166
// function* idGenerator(){
//     // return "Reutrned" ;
//     // for(let i = 1000; i > 0 ; i++){
//     //     yield i ;
//     // }
//     // another way to write the same code
//     let i = 1000;
//     while(true){
//         yield i++;
//     }
// }
// let newId = idGenerator();
// console.log(newId.next().value)
// console.log(newId.next().value)
// console.log(newId.next().value)
// console.log(newId.next().value)
// console.log(newId.next().value)
// console.log(newId.next().value)
// console.log(newId.next().value)
// console.log(newId.next().value)
// console.log(newId.next().value)
// console.log(newId.next().value)

// 167 - 168
// import users,{num1 as x,time, greet as hello} from "./modules.js"
// console.log(x);
// console.log(time);
// hello("mahmoud");
// console.log(users());
// import * as all from "./modules.js"
// console.log(all.num1);
// console.log(all.time);
// all.greet("mahmoud");
// console.log(all.default());
// Assigments
// 1 
// let datenow = new Date();
// let mybd = new Date("10 5 2000");
// let myage = datenow - mybd;
// console.log(myage / 1000 + " Seconds")
// console.log(myage / 1000 / 60 + " Minutes")
// console.log(myage / 1000 / 60 / 60 + " Hours")
// console.log(myage / 1000 / 60 / 60 / 24 + " Days")
// console.log(myage / 1000 / 60 / 60 / 24 / 30.44 + " Months")
// console.log(myage / 1000 / 60 / 60 / 24 / 365.24 + " Years")

// 2
// let date = new Date(0);
// date.setSeconds(1);
// date.setFullYear(1980);
// console.log(date);

// 3
// let date = new Date();
// let month = ["January","February","March","April","May","June","July","August","September","October","November","December"] ;
// date.setDate(0);
// console.log(date);
// console.log(`Previous Month Is ${month[date.getMonth()]} And Last Day Is ${date.getDate()}`);
// // required ouput
// // "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// // "Previous Month Is April And Last Day Is 30"

// 4
// let date1 = new Date("May 10, 2001 10:30:00");
// let date2 = new Date(2001, 5, 10, 10, 30, 0);
// let date3 = new Date();
// date3.setFullYear(2001);
// date3.setMonth(5);
// date3.setDate(10);
// date3.setHours(10);
// date3.setMinutes(30);
// date3.setSeconds(0);
// console.log(date1);
// console.log(date2);
// console.log(date3);

// 5
// let start = performance.now();
// for(let count = 1 ; count <= 99999 ; count ++){
//     console.log(count);
// }
// let end = performance.now();
// let time = Math.trunc(end - start);
// console.log(time);

// 6
// function* gen(){
//     for (let i = 0; i > -1 ; i ++ ){
//         let num = Math.trunc(Math.random() * (10**i)) ;
//         yield num ;
//     }
// }
// let generator = gen();
// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

// 7
// function* genNumbers() {
//     yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//     yield* ["A", "B", "B", "B", "C", "D"];
// }
// // Write Your Generator Function Here
// function* genAll(){
//     let out = new Set();
//     for(let value of genNumbers()){
//         if (!out.has(value)) {
//             out.add(value);
//             yield value;
//         }
//     }
//     for(let value of genLetters()){
//         if(!out.has(value)){
//             out.add(value);
//             yield value;
//         }
//     }
// }
// let generator = genAll();
// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}


