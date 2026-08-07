// 116
//Extract data from arrays and objects 
// let a = 1,b = 1,c = 1,d = 1; 
// let mydata = ["mahmoud" , "ali", "mona", "steve","amal"] ;
// // update data 
// [a, b, c, , d,f,e = "test"] =  mydata; 
// console.log(a, b, c, d,f, e);


// 117
// let friends = ["ali", "mona", ["steve", "mahmoud", ["alaa", "elle"]]];
// let [,,[,name1,[,name2]]] =  friends ;
// console.log(name1);
// console.log(name2);

// 118
// let x = 10 ;
// let y = 20 ;
// console.log(`x = ${x} : , y = ${y}`);
// [x, y]=[y, x];
// console.log(`x = ${x} : , y = ${y}`);


// 119
// let userName,age,major,country,available,test;
// let user = {
//     userName : "mahmoud",
//     age : 25,
//     major : "Engineer",
//     country : "Egypt",
//     available: true
// }
// user;
// // let {userName,age,major,country,available} = user ;
// ({userName,age,country,available, test} = user );
// console.log(userName);
// console.log(age);
// console.log(major);
// console.log(country);
// console.log(available);
// console.log(test);

//120

// let userName,age,major,country,available,test,skills,html,css,js;
// let user = {
//     name : "mahmoud",
//     age : 25,
//     major : "Engineer",
//     country : "Egypt",
//     available: true,    
//     skills : {
//         html :100,
//         js : 755,
//         css : 0
//     }
// }
// user;
// // let {userName,age,major,country,available} = user ;
// ({name:userName,age,country,available, test, color:co = "red",skills, skills:{html:h ,css}} = user);
// //same output
// ({html:skill1 , css:skill2} = user.skills)
// console.log(user);
// console.log(userName);
// console.log(age);
// console.log(major);
// console.log(country);
// console.log(available);
// console.log(test);
// console.log(co);
// console.log(skills);
// console.log(h);
// console.log(css);
// console.log("---------------------");
// console.log(skill1);
// console.log(skill2);

// 121

// let student = {
//     studentId : 6366,
//     studentName : "Galio",
//     studentAge : 24,
//     studentGrades : {
//         english : 68,
//         japanese : 69,
//         math :79,
//         chemistry : 88  
//     }
// };
// function isPass({studentId:id,studentGrades:grades} = user){
//     let result = false;
//     grades = Object.values(grades);
//     for(let count = 0; count < grades.length ; count++){
//         grades[count] >= 50 ? result = true: result = false;
//     }
//     return result ;
// }
// console.log(`did the studend ${student.name} Passed ? ${isPass(student)}`)

// 122
/* Destructuring - Challenge */
let chosen = 1 ;
let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

console.log(myFriends);
console.log(chosen);
console.log("-----------------------------");
let Friend ;
switch (chosen) {
    case 1 :
        [Friend] = myFriends;
        break;
    case 2 :
        [,Friend] = myFriends;
        break;
    case 3 :
        [,,Friend] = myFriends;
        break;
    default :
        console.log("Wrong Chosen Number");
        break;
    }
let {title,age,available,skills:[skill1,skill2]} = Friend ;
console.log(title);
console.log(age);
console.log(available);
console.log(skill2);