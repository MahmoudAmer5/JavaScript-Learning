//1
const studentName = "Mahmoud Amer" ;
const studentId = 46868 ;
let studentAge = 25 ;   
let studentUniversity = "Cairo University" ;
let studentFaculty = "Engineering" ;
let studentGpa = 2.65 ;
let studentCurrantLevel = 3 ;
let studentIsGraduated = false ;
let studentNumberOfCourses = 18 ;
let studentTuituinFee = 35000 ;

//2
console.log(typeof(studentName));
console.log(typeof(studentId));
console.log(typeof(studentGpa));
console.log(typeof(studentIsGraduated));
//3
console.log("Student Name :" + " " + studentName);
console.log(`Faculy : ${studentFaculty}`);
console.log("University" +` : ${studentUniversity}`);
//4
console.log(`Student Information\n--------------\nName : ${studentName}`);
//5
console.log(`age after 10 years = ${studentAge + 10}`);
console.log(studentGpa*2);
console.log(studentTuituinFee*(100-15)/100);
console.log(studentTuituinFee*(100+14)/100);
console.log(studentTuituinFee/studentNumberOfCourses);
//6
let marks = "95";
marks = +marks;
console.log(`marks : ${marks}` + `marks type : ${typeof(marks)}`);
//7student
// type coercion will apply
//string value of "25 years"
console.log(studentAge + " years");
//string calue of 125  
console.log("100" + studentAge);
//number 75
console.log("100" - studentAge);
//number 26 beccause true = 1 
console.log(true + studentAge);
//number 25 because false = 0
console.log(false + studentAge);
//8
console.log("====================================\n");
console.log();
console.log("====================================\n");
console.log("        STUDENT REPORT");
console.log(`Name            :${studentName}`);
console.log(`Age             :${studentAge}`);
console.log(`University      :${studentUniversity}`);
console.log(`Faculty         :${studentFaculty}`);
console.log(`Courses         :${studentNumberOfCourses}`);
console.log(`Graduated       :${studentIsGraduated}`);
console.log(`Tuition         :${studentTuituinFee}\n`);
console.log(`Age After 10 Years :${studentAge + 10}`);
console.log(`Discounted Fee     :${studentTuituinFee*(100-15)/100}`);
console.log(`Taxed Fee          :${studentTuituinFee*(100+14)/100}`);
console.log("====================================");



