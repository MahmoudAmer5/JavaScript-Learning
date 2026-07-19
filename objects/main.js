// ============================================= Objects ===========================================
// let myKey = "country";
// let student = {
//     //proparties
//     name    : "mahmoud",
//     id      : 1,
//     age     : 25,
//     collage : "Engineering",
//     country : "Egypt",
//     level   : 3,
//     //methods   
//     getData(){
//         return [student.name, student.id, student.age, student.collage, student.level];
//     }
// }
// console.log(`Student Data : ${student.getData()}`);
// console.log(`Student Age : ${student["age"]} || ${typeof student["age"]}`);
// console.log(`Student country : ${student[myKey]}`);
// console.log("========================================")

// console.log("========================================")

// let person = {
//     //proparties
//     name    : "mahmoud",
//     age     : 25,
//     collage : "Engineering",
//     available : true,
//     skills  : ["programming", "IT", "Embedded Systems"],
//     adress  : {
//         KSA     : "Ryad",
//         Egypt   : {
//             address_1   : "Cairo",
//             address_2   : "Aswan"} },
//     //methods   
//     getData : function (){
//         return [person.name, person.age, person.collage, person.ready(person.available),person.skills.join(" | "),person.adress.KSA,person.adress.Egypt];},
//     ready   : function (ava){
//         return ava? "Ready for work" : "Not Ready for work";}}
// console.log(`this's person data : ${person.getData()}`)
// console.log(`this's person is ${person.ready()}`)

// console.log("========================================");
// let student = new Object({country : "egypt"});
// student.name    = "Mahmoud";
// student["age"]  = 30 ;
// student.birthDate   = [10, 5, 2001] ;
// console.log(student);

// student.age = 25 ;
// console.log(student);

// student.sayhello = function (){
//     return `Hello`;}
// console.log(student.sayhello());


// console.log("========================================");

// document.getElementById("test").onclick = function (){
//     console.log(this.value);
// };

// console.log("========================================");


// let student_1 = {
//     //proparties
//     name    : "mahmoud",
//     id      : 1,
//     grade   : 75,
//     //method 
//     isSucceeded : function (){
//         return this.grade >= 50 ? "Congratulations, you have Succeeded":"you have Failed";
//     } 
// };
// console.log(student_1);
// console.log(student_1.grade);
// console.log(student_1.isSucceeded());
// console.log("----------new student prototype----------");
// let test = Object.create({});
// console.log(test);

// let student_2 = Object.create(student_1);
// console.log(student_2);
// console.log(student_2.name);
// console.log(student_2.grade);
// console.log(student_2.isSucceeded());
// console.log("----------after changing values----------");
// student_2.name = "Ahmed" ;
// student_2.id = 2 ;
// student_2.age = 21 ;
// student_2.grade = 49;

// console.log(student_2);
// console.log(student_2.name);
// console.log(student_2.grade);
// console.log(student_2.isSucceeded());

// console.log("========================================");
// let student_1 = {
//     //proparties
//     name    : "Ahmed",

// };
// let student_2 = {
//     //proparties
//     name    : "mahmoud",
//     id      : 1,
//     grade   : 75,
//     //method 
//     isSucceeded : function (){
//         return this.grade >= 50 ? "Congratulations, you have Succeeded":"you have Failed";
//     } 
// };


// let newStudent = Object.assign({},student_2);
// console.log(newStudent);











