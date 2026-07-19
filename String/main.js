// let myName = "  Mahmoud  ";

// console.log(myName[5]);
// console.log(myName.charAt(5));
// console.log(myName.length);
// myName = myName.trim();
// console.log(myName);
// console.log(myName[5]);
// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// myName = "  Mahmoud  ";
// console.log("");
// console.log(myName.toUpperCase().trim().charAt(5));
// console.log('==========================');

// let Title = "I love My Life";

// console.log(Title.indexOf(" "));
// console.log(Title.indexOf(" ",2));
// console.log(Title.indexOf(" ",10));
// console.log(Title.lastIndexOf(" "));
// console.log(Title.indexOf("My"));

// console.log(Title.slice(7,9));
// console.log(Title.slice(0));
// console.log(Title.slice(-5));
// console.log(Title.slice(-9, -1));
// console.log(Title.repeat(3));
// console.log(Title.split());
// console.log(Title.split(""));
// console.log(Title.split("",7));
// console.log(Title.split(" "));
// console.log('==========================');

// let Word = "Hello my name is mahmoud";

// console.log(Word.substring(25));
// console.log(typeof Word.substring(25));
// console.log(Word.substr(0));
// console.log(Word.substr(35));
// console.log(Word.substr(-7));
// console.log(Word.substr(-7,5));
// console.log(Word.includes("n"));
// console.log(Word.includes("is"));
// console.log(Word.includes("my" , 10));
// console.log('==========================');
// console.log(Word.startsWith("Hello"));
// console.log(Word.startsWith("my"));
// console.log(Word.startsWith("my",6));
// console.log('==========================');
// console.log(Word.endsWith("d"));
// console.log(Word.endsWith("mahmoud"));
// console.log(Word.endsWith("my" , 8));
// console.log(Word.endsWith("my" , 9));
// console.log(Word.endsWith("is" , -9));
// console.log('==========================');

console.log('=========String Challange=========');
/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(a.indexOf(a.charAt(2)),a.indexOf(a.charAt(7)))); // Zero

// 8 H
console.log(a.charAt(a.indexOf("h")).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array 
console.log(a.split(" " , 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution / no lenght
console.log(a.substr(0,a.indexOf(" ")) + " "+ a.substr(a.indexOf("S"))); // Elzero School

// Solution Must Be Dynamic Because String May Changes / no length
console.log(a[0].toLowerCase() + a.slice(a.indexOf("l"), -1).toUpperCase() + a[a.indexOf("l" ,3)].toLowerCase()); // eLZERO WEB SCHOOl
//console.log(a.charAt(0).toLowerCase() + a.slice(1, -1).toUpperCase() + a.charAt(a.length - 1).toLowerCase());



















// let Test = `
// 9:01
// Learn JavaScript In Arabic 2021 - #001 - Introduction And What Is JavaScript ?
// 1.5 مليون مشاهدة
// •
// قبل 5 سنوات


// 7:26
// Learn JavaScript In Arabic 2021 - #002 - How To Study The Course ?
// 380 ألف مشاهدة
// •
// قبل 5 سنوات


// 6:29
// Learn JavaScript In Arabic 2021 - #003 - Setting Up Environment And Tools
// 407 ألف مشاهدة
// •
// قبل 5 سنوات


// 5:34
// Learn JavaScript In Arabic 2021 - #004 - Work With Chrome Developer Tools
// 339 ألف مشاهدة
// •
// قبل 5 سنوات


// 4:45
// Learn JavaScript In Arabic 2021 - #005 - Where To Put The Code
// 289 ألف مشاهدة
// •
// قبل 5 سنوات


// 4:27
// Learn JavaScript In Arabic 2021 - #006 - Comments And Bad Practices
// 243 ألف مشاهدة
// •
// قبل 5 سنوات


// 6:32
// Learn JavaScript In Arabic 2021 - #007 - Output To Screen
// 267 ألف مشاهدة
// •
// قبل 5 سنوات


// 6:19
// Learn JavaScript In Arabic 2021 - #008 - Console Methods And Styling And WebAPI
// 255 ألف مشاهدة
// •
// قبل 5 سنوات


// 6:41
// Learn JavaScript In Arabic 2021 - #009 - What Is ECMAScript ?
// 225 ألف مشاهدة
// •
// قبل 5 سنوات


// 10:13
// Learn JavaScript In Arabic 2021 - #010 - Data Types And Typeof Operator
// 265 ألف مشاهدة
// •
// قبل 5 سنوات


// 6:31
// Learn JavaScript In Arabic 2021 - #011 - Variables Introduction
// 216 ألف مشاهدة
// •
// قبل 5 سنوات


// 4:09
// Learn JavaScript In Arabic 2021 - #012 - Identifiers Name Conventions And Rules
// 185 ألف مشاهدة
// •
// قبل 5 سنوات


// 7:18
// Learn JavaScript In Arabic 2021 - #013 - Var, Let, Const Compare
// 208 ألف مشاهدة
// •
// قبل 5 سنوات


// 7:34
// Learn JavaScript In Arabic 2021 - #014 - String Syntax And Character Escape Sequences
// 183 ألف مشاهدة
// •
// قبل 5 سنوات


// 2:53
// Learn JavaScript In Arabic 2021 - #015 - Concatenation
// 171 ألف مشاهدة
// •
// قبل 5 سنوات


// 8:16
// Learn JavaScript In Arabic 2021 - #016 - Template Literals Template Strings
// 215 ألف مشاهدة
// •
// قبل 5 سنوات


// 3:02
// Learn JavaScript In Arabic 2021 - #017 - Variable And Concatenation Challenge
// 204 ألف مشاهدة
// •
// قبل 5 سنوات


// 8:30
// Learn JavaScript In Arabic 2021 - #018 - Arithmetic Operators
// 186 ألف مشاهدة
// •
// قبل 5 سنوات


// 5:24
// Learn JavaScript In Arabic 2021 - #019 - Unary Plus And Negation Operators
// 159 ألف مشاهدة
// •
// قبل 5 سنوات


// 5:57
// Learn JavaScript In Arabic 2021 - #020 - Type Coercion
// 155 ألف مشاهدة
// •
// قبل 5 سنوات


// 3:15
// Learn JavaScript In Arabic 2021 - #021 - Assignment Operators
// 138 ألف مشاهدة
// •
// قبل 5 سنوات


// 3:26
// Learn JavaScript In Arabic 2021 - #022 - Operators Challenges
// 163 ألف مشاهدة
// •
// قبل 5 سنوات


// 7:15
// Learn JavaScript In Arabic 2021 - #023 - Number
// 171 ألف مشاهدة
// •
// قبل 5 سنوات


// 8:19
// Learn JavaScript In Arabic 2021 - #024 - Number Methods
// 166 ألف مشاهدة
// •
// قبل 5 سنوات


// 5:01
// Learn JavaScript In Arabic 2021 - #025 - Math Object
// 156 ألف مشاهدة
// •
// قبل 5 سنوات


// 2:27
// Learn JavaScript In Arabic 2021 - #026 - Number Challenge
// 141 ألف مشاهدة
// •
// قبل 5 سنوات


// 8:29
// Learn JavaScript In Arabic 2021 - #027 - String Methods Part 1
// 165 ألف مشاهدة
// •
// قبل 5 سنوات


// 12:39
// Learn JavaScript In Arabic 2021 - #028 - String Methods Part 2
// 158 ألف مشاهدة
// •
// قبل 5 سنوات


// 12:58
// Learn JavaScript In Arabic 2021 - #029 - String Methods Part 3
// 147 ألف مشاهدة
// •
// قبل 5 سنوات


// 2:51
// Learn JavaScript In Arabic 2021 - #030 - String Challenge
// 117 ألف مشاهدة
// •
// قبل 5 سنوات


// 6:35
// Learn JavaScript In Arabic 2021 - #031 - Comparison Operators
// 126 ألف مشاهدة
// •
// قبل 5 سنوات


// 4:45
// Learn JavaScript In Arabic 2021 - #032 - Logical Operators
// 102 ألف مشاهدة
// •
// قبل 5 سنوات


// 8:51
// Learn JavaScript In Arabic 2021 - #033 - If Conditions
// 122 ألف مشاهدة
// •
// قبل 5 سنوات


// 5:14
// Learn JavaScript In Arabic 2021 - #034 - Nested If Condition
// 105 ألف مشاهدة
// •
// قبل 5 سنوات


// 7:17
// Learn JavaScript In Arabic 2021 - #035 - Conditional Ternary Operator
// 123 ألف مشاهدة
// •
// قبل 5 سنوات


// 4:36
// Learn JavaScript In Arabic 2021 - #036 - Nullish Coalescing Operator And Logical Or
// 115 ألف مشاهدة
// •
// قبل 5 سنوات


// 2:48
// Learn JavaScript In Arabic 2021 - #037 - If Condition Challenge
// 113 ألف مشاهدة
// •
// قبل 5 سنوات


// 6:05
// Learn JavaScript In Arabic 2021 - #038 - Switch Statement
// 114 ألف مشاهدة
// •
// قبل 5 سنوات


// 3:30
// Learn JavaScript In Arabic 2021 - #039 - Switch And If Condition Challenge
// 100 ألف مشاهدة
// •
// قبل 5 سنوات


// 8:10
// Learn JavaScript In Arabic 2021 - #040 - Array Big Introduction
// 138 ألف مشاهدة
// •
// قبل 5 سنوات


// 5:45
// Learn JavaScript In Arabic 2021 - #041 - Using Length With Array
// 107 ألف مشاهدة
// •
// قبل 5 سنوات


// 5:21
// Learn JavaScript In Arabic 2021 - #042 - Add And Remove From Array
// 110 ألف مشاهدة
// •
// قبل 5 سنوات


// 5:38
// Learn JavaScript In Arabic 2021 - #043 - Searching Array
// 108 ألف مشاهدة
// •
// قبل 5 سنوات


// 3:16
// Learn JavaScript In Arabic 2021 - #044 - Sorting Arrays
// 100 ألف مشاهدة
// •
// قبل 5 سنوات


// 7:16
// Learn JavaScript In Arabic 2021 - #045 - Slicing Array
// 108 ألف مشاهدة
// •
// قبل 5 سنوات


// 3:43
// Learn JavaScript In Arabic 2021 - #046 - Joining Arrays
// 95 ألف مشاهدة
// •
// قبل 5 سنوات


// 2:14
// Learn JavaScript In Arabic 2021 - #047 - Array Challenge
// 100 ألف مشاهدة
// •
// قبل 5 سنوات


// 8:07
// Learn JavaScript In Arabic 2021 - #048 - Loop - For And Concept Of Loop
// 121 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:13
// Learn JavaScript In Arabic 2021 - #049 - Looping On Sequences
// 102 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:35
// Learn JavaScript In Arabic 2021 - #050 - Nested Loops And Trainings
// 92 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:14
// Learn JavaScript In Arabic 2021 - #051 - Loop Control - Break, Continue, Label
// 98 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:39
// Learn JavaScript In Arabic 2021 - #052 - Loop - For Advanced Example
// 88 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:56
// Learn JavaScript In Arabic 2021 - #053 - Practice - Add Products To Page
// 95 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:03
// Learn JavaScript In Arabic 2021 - #054 - Loop - While
// 87 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:32
// Learn JavaScript In Arabic 2021 - #055 - Loop - Do While
// 75 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:31
// Learn JavaScript In Arabic 2021 - #056 - Loop - Challenge
// 96 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:14
// Learn JavaScript In Arabic 2021 - #057 - Function Intro And Basic Usage
// 132 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:22
// Learn JavaScript In Arabic 2021 - #058 - Function Advanced Examples
// 104 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:22
// Learn JavaScript In Arabic 2021 - #059 - Function Return And Use Cases
// 106 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:42
// Learn JavaScript In Arabic 2021 - #060 - Function Default Parameters
// 95 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:04
// Learn JavaScript In Arabic 2021 - #061 - Function Rest Parameters
// 104 ألف مشاهدة
// •
// قبل 4 سنوات


// 11:39
// Learn JavaScript In Arabic 2021 - #062 - Function Ultimate Practice
// 104 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:21
// Learn JavaScript In Arabic 2021 - #063 - Random Arguments Function Challenge
// 109 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:44
// Learn JavaScript In Arabic 2021 - #064 - Anonymous Function And Practice
// 102 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:34
// Learn JavaScript In Arabic 2021 - #065 - Return Nested Function
// 89 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:12
// Learn JavaScript In Arabic 2021 - #066 - Arrow Function Syntax
// 94 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:10
// Learn JavaScript In Arabic 2021 - #067 - Scope - Global And Local
// 83 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:54
// Learn JavaScript In Arabic 2021 - #068 - Scope - Block
// 75 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:17
// Learn JavaScript In Arabic 2021 - #069 - Scope - Lexical (Static)
// 77 ألف مشاهدة
// •
// قبل 4 سنوات


// 2:48
// Learn JavaScript In Arabic 2021 - #070 - Arrow Function Challenge
// 87 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:46
// Learn JavaScript In Arabic 2021 - #071 - Higher Order Functions - Map
// 147 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:53
// Learn JavaScript In Arabic 2021 - #072 - Higher Order Functions - Map Practice
// 101 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:44
// Learn JavaScript In Arabic 2021 - #073 - Higher Order Functions - Filter
// 94 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:36
// Learn JavaScript In Arabic 2021 - #074 - Higher Order Functions - Filter Practice
// 80 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:39
// Learn JavaScript In Arabic 2021 - #075 - Higher Order Functions - Reduce
// 93 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:47
// Learn JavaScript In Arabic 2021 - #076 - Higher Order Functions - Reduce Practice
// 76 ألف مشاهدة
// •
// قبل 4 سنوات


// 12:02
// Learn JavaScript In Arabic 2021 - #077 - Higher Order Functions - ForEach And Practice
// 99 ألف مشاهدة
// •
// قبل 4 سنوات


// 2:23
// Learn JavaScript In Arabic 2021 - #078 - Higher Order Functions - Challenge
// 75 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:44
// Learn JavaScript In Arabic 2021 - #079 - Object - Introduction
// 107 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:23
// Learn JavaScript In Arabic 2021 - #080 - Dot Notation vs Bracket Notation
// 81 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:43
// Learn JavaScript In Arabic 2021 - #081 - Nested Object And Advanced Trainings
// 78 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:25
// Learn JavaScript In Arabic 2021 - #082 - Create Object With New Keyword
// 77 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:31
// Learn JavaScript In Arabic 2021 - #083 - This Keyword
// 82 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:36
// Learn JavaScript In Arabic 2021 - #084 - Create Object With Create Method
// 79 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:22
// Learn JavaScript In Arabic 2021 - #085 - Create Object With Assign Method
// 80 ألف مشاهدة
// •
// قبل 4 سنوات


// 11:37
// Learn JavaScript In Arabic 2021 - #086 - What Is DOM And Select Elements
// 157 ألف مشاهدة
// •
// قبل 4 سنوات


// 9:44
// Learn JavaScript In Arabic 2021 - #087 - Get Set Elements Content And Attributes
// 125 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:40
// Learn JavaScript In Arabic 2021 - #088 - Check Attributes And Examples
// 101 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:16
// Learn JavaScript In Arabic 2021 - #089 - Create And Append Elements
// 107 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:58
// Learn JavaScript In Arabic 2021 - #090 - Product With Title And Description Practice
// 89 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:23
// Learn JavaScript In Arabic 2021 - #091 - Deal With Children's
// 81 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:59
// Learn JavaScript In Arabic 2021 - #092 - DOM Events
// 103 ألف مشاهدة
// •
// قبل 4 سنوات


// 10:06
// Learn JavaScript In Arabic 2021 - #093 - Validate Form And Prevent Default
// 122 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:40
// Learn JavaScript In Arabic 2021 - #094 - Event Simulation - Click Focus Blur
// 85 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:49
// Learn JavaScript In Arabic 2021 - #095 - Class List Object And Methods
// 81 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:53
// Learn JavaScript In Arabic 2021 - #096 - CSS Styling And Stylesheets
// 76 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:45
// Learn JavaScript In Arabic 2021 - #097 - Before, After, Prepend, Append, Remove
// 68 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:06
// Learn JavaScript In Arabic 2021 - #098 - DOM Traversing
// 68 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:57
// Learn JavaScript In Arabic 2021 - #099 - DOM Cloning
// 62 ألف مشاهدة
// •
// قبل 4 سنوات


// 9:38
// Learn JavaScript In Arabic 2021 - #100 - AddEventListener
// 93 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:35
// Learn JavaScript In Arabic 2021 - #101 - DOM Challenge
// 78 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:24
// Learn JavaScript In Arabic 2021 - #102 - What Is BOM?
// 78 ألف مشاهدة
// •
// قبل 4 سنوات


// 9:12
// Learn JavaScript In Arabic 2021 - #103 - Alert, Confirm, Prompt
// 70 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:07
// Learn JavaScript In Arabic 2021 - #104 - setTimeout and clearTimeout
// 68 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:35
// Learn JavaScript In Arabic 2021 - #105 - setInterval and clearInterval
// 63 ألف مشاهدة
// •
// قبل 4 سنوات


// 12:24
// Learn JavaScript In Arabic 2021 - #106 - Window Location Object
// 68 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:07
// Learn JavaScript In Arabic 2021 - #107 - Window Open And Close
// 58 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:41
// Learn JavaScript In Arabic 2021 - #108 - Window History Object
// 48 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:01
// Learn JavaScript In Arabic 2021 - #109 - Scroll, ScrollTo, ScrollBy, Focus, Print, Stop
// 60 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:55
// Learn JavaScript In Arabic 2021 - #110 - Scroll To Top Using Y Practice
// 57 ألف مشاهدة
// •
// قبل 4 سنوات


// 9:49
// Learn JavaScript In Arabic 2021 - #111 - Local Storage
// 90 ألف مشاهدة
// •
// قبل 4 سنوات


// 10:10
// Learn JavaScript In Arabic 2021 - #112 - Local Storage Color Application Practice
// 80 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:56
// Learn JavaScript In Arabic 2021 - #113 - Session Storage And Use Cases
// 56 ألف مشاهدة
// •
// قبل 4 سنوات


// 2:44
// Learn JavaScript In Arabic 2021 - #114 - BOM Challenge
// 65 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:23
// Learn JavaScript In Arabic 2021 - #115 - Destructuring Arrays Part 1
// 70 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:29
// Learn JavaScript In Arabic 2021 - #116 - Destructuring Arrays Part 2
// 47 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:43
// Learn JavaScript In Arabic 2021 - #117 - Destructuring Arrays Part 3 - Swap Variables
// 45 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:09
// Learn JavaScript In Arabic 2021 - #118 - Destructuring Objects Part 1
// 49 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:01
// Learn JavaScript In Arabic 2021 - #119 - Destructuring Objects Part 2
// 47 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:08
// Learn JavaScript In Arabic 2021 - #120 - Destructuring Function Parameters
// 44 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:17
// Learn JavaScript In Arabic 2021 - #121 - Destructuring Mixed Content
// 44 ألف مشاهدة
// •
// قبل 4 سنوات


// 2:49
// Learn JavaScript In Arabic 2021 - #122 - Destructuring Challenge
// 49 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:40
// Learn JavaScript In Arabic 2021 - #123 - Set Data Types And Methods
// 68 ألف مشاهدة
// •
// قبل 4 سنوات


// 10:57
// Learn JavaScript In Arabic 2021 - #124 - Set vs WeakSet And Garbage Collector
// 56 ألف مشاهدة
// •
// قبل 4 سنوات


// 10:15
// Learn JavaScript In Arabic 2021 - #125 - Map Data Type Vs Object
// 55 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:33
// Learn JavaScript In Arabic 2021 - #126 - Map Methods
// 44 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:52
// Learn JavaScript In Arabic 2021 - #127 - Map Vs WeakMap
// 40 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:28
// Learn JavaScript In Arabic 2021 - #128 - Array.from Method
// 46 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:13
// Learn JavaScript In Arabic 2021 - #129 - Array.copyWithin Method
// 40 ألف مشاهدة
// •
// قبل 4 سنوات


// 9:40
// Learn JavaScript In Arabic 2021 - #130 - Array.some Method
// 40 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:38
// Learn JavaScript In Arabic 2021 - #131 - Array.every Method
// 35 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:33
// Learn JavaScript In Arabic 2021 - #132 - Spread Syntax And Use Cases
// 40 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:37
// Learn JavaScript In Arabic 2021 - #133 - Map And Set Challenge
// 48 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:26
// Learn JavaScript In Arabic 2021 - #134 - Intro And What Is Regular Expression
// 70 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:20
// Learn JavaScript In Arabic 2021 - #135 - Regular Expressions - Modifiers
// 54 ألف مشاهدة
// •
// قبل 4 سنوات


// 10:19
// Learn JavaScript In Arabic 2021 - #136 - Regular Expressions - Ranges Part 1
// 54 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:16
// Learn JavaScript In Arabic 2021 - #137 - Regular Expressions - Ranges Part 2
// 45 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:26
// Learn JavaScript In Arabic 2021 - #138 - Regular Expressions - Character Classes Part 1
// 47 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:42
// Learn JavaScript In Arabic 2021 - #139 - Regular Expressions - Character Classes Part 2
// 44 ألف مشاهدة
// •
// قبل 4 سنوات


// 9:07
// Learn JavaScript In Arabic 2021 - #140 - Regular Expressions - Quantifiers Part 1
// 47 ألف مشاهدة
// •
// قبل 4 سنوات


// 2:43
// Learn JavaScript In Arabic 2021 - #141 - Regular Expressions - Quantifiers Part 2
// 38 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:16
// Learn JavaScript In Arabic 2021 - #142 - Regular Expressions - Quantifiers Part 3
// 40 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:23
// Learn JavaScript In Arabic 2021 - #143 - Regular Expressions - Replace With Pattern
// 37 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:48
// Learn JavaScript In Arabic 2021 - #144 - Regular Expressions - Form Validation
// 42 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:07
// Learn JavaScript In Arabic 2021 - #145 - Test Your Regular Expressions And Discussions
// 35 ألف مشاهدة
// •
// قبل 4 سنوات


// 2:08
// Learn JavaScript In Arabic 2021 - #146 - Regular Expressions - Challenge
// 39 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:59
// Learn JavaScript In Arabic 2021 - #147 - OOP Introduction
// 58 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:23
// Learn JavaScript In Arabic 2021 - #148 - Constructor Function Introduction
// 52 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:07
// Learn JavaScript In Arabic 2021 - #149 - Constructor Function New Syntax
// 45 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:07
// Learn JavaScript In Arabic 2021 - #150 - Deal With Properties And Methods
// 43 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:25
// Learn JavaScript In Arabic 2021 - #151 - Update Properties And Built In Constructors
// 41 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:59
// Learn JavaScript In Arabic 2021 - #152 - Class Static Properties And Methods
// 42 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:29
// Learn JavaScript In Arabic 2021 - #153 - Class Inheritance
// 44 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:44
// Learn JavaScript In Arabic 2021 - #154 - Class Encapsulation
// 43 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:18
// Learn JavaScript In Arabic 2021 - #155 - Prototype Introduction
// 42 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:10
// Learn JavaScript In Arabic 2021 - #156 - Add To Prototype Chain And Extend Constructors Features
// 39 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:18
// Learn JavaScript In Arabic 2021 - #157 - Object Meta Data And Descriptor Part 1
// 39 ألف مشاهدة
// •
// قبل 4 سنوات


// 2:43
// Learn JavaScript In Arabic 2021 - #158 - Object Meta Data And Descriptor Part 2
// 35 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:27
// Learn JavaScript In Arabic 2021 - #159 - Date And Time Introduction
// 48 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:40
// Learn JavaScript In Arabic 2021 - #160 - Get Date And Time
// 39 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:31
// Learn JavaScript In Arabic 2021 - #161 - Set Date And Time
// 35 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:22
// Learn JavaScript In Arabic 2021 - #162 - Formatting Date And Time
// 31 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:36
// Learn JavaScript In Arabic 2021 - #163 - Tracking Operations Time
// 29 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:00
// Learn JavaScript In Arabic 2021 - #164 - Generator Function Introduction
// 34 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:43
// Learn JavaScript In Arabic 2021 - #165 - Delegate Generator Function
// 28 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:08
// Learn JavaScript In Arabic 2021 - #166 - Generate Infinite Numbers
// 27 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:25
// Learn JavaScript In Arabic 2021 - #167 - Modules Import And Export
// 40 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:21
// Learn JavaScript In Arabic 2021 - #168 - Named vs Default Export And Import All
// 36 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:43
// Learn JavaScript In Arabic 2021 - #169 - What Is JSON
// 65 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:39
// Learn JavaScript In Arabic 2021 - #170 - JSON Syntax And Compare With JS Object
// 50 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:35
// Learn JavaScript In Arabic 2021 - #171 - What Is API
// 84 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:56
// Learn JavaScript In Arabic 2021 - #172 - Parse And Stringify
// 55 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:00
// Learn JavaScript In Arabic 2021 - #173 - Asynchronous vs Synchronous Programming
// 59 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:30
// Learn JavaScript In Arabic 2021 - #174 - Call Stack And Web API
// 56 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:56
// Learn JavaScript In Arabic 2021 - #175 - Event Loop And Callback Queue
// 55 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:08
// Learn JavaScript In Arabic 2021 - #176 - What Is AJAX And Network Information
// 58 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:44
// Learn JavaScript In Arabic 2021 - #177 - Request And Response From Real API
// 57 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:12
// Learn JavaScript In Arabic 2021 - #178 - Loop On Data
// 52 ألف مشاهدة
// •
// قبل 4 سنوات


// 6:24
// Learn JavaScript In Arabic 2021 - #179 - Callback Hell Or Pyramid Of Doom
// 60 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:30
// Learn JavaScript In Arabic 2021 - #180 - Promise Intro And Syntax
// 67 ألف مشاهدة
// •
// قبل 4 سنوات


// 9:32
// Learn JavaScript In Arabic 2021 - #181 - Promise - Then, Catch And Finally
// 52 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:09
// Learn JavaScript In Arabic 2021 - #182 - Promise And XHR
// 43 ألف مشاهدة
// •
// قبل 4 سنوات


// 5:56
// Learn JavaScript In Arabic 2021 - #183 - Fetch API
// 63 ألف مشاهدة
// •
// قبل 4 سنوات


// 8:09
// Learn JavaScript In Arabic 2021 - #184 - Promise All And All Settled And Race
// 39 ألف مشاهدة
// •
// قبل 4 سنوات


// 7:28
// Learn JavaScript In Arabic 2021 - #185 - Async And Training
// 45 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:58
// Learn JavaScript In Arabic 2021 - #186 - Await And Training
// 40 ألف مشاهدة
// •
// قبل 4 سنوات


// 4:34
// Learn JavaScript In Arabic 2021 - #187 - Try, Catch And Finally With Fetch
// 46 ألف مشاهدة
// •
// قبل 4 سنوات


// 3:09
// Learn JavaScript In Arabic 2021 - #188 - The End And Advices
// 70 ألف مشاهدة
// •
// قبل 4 سنوات`;
// Test = Test.replaceAll("\n"," ");
// Test = Test.split("Learn JavaScript In Arabic");
// console.log(Test);

// for (let count = 0; count < Test.length; count++) {
//     Test[count] = Test[count].slice(Test[count].indexOf("#"),Test[count].indexOf(":"));
//     Test[count] = Test[count].slice(Test[count].charAt(0),Test[count].indexOf("ألف"));
// }
// console.log(Test);
