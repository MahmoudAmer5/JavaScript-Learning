// 123

// let data = [1,1,2,3,3,5,5,6,11] ; // Creating and Adding Values to Set
// // let setData = new Set(data);
// // let setData = new Set([1,1,2,3,3,5,5,6,11]);
// let setData = new Set().add(1).add(2).add(3);
// setData.add(5).add(6).add(11);
// console.log(data);
// console.log(setData);
// console.log(setData[0]); // undefined
// console.log(setData.size);
// console.log(`------------`);// Deleteing Value (search for value and delete it if found)
// let returnValue = setData.delete(6);
// console.log(setData);
// console.log(setData.size);
// console.log(returnValue);
// returnValue = setData.delete(6);
// console.log(returnValue);
// console.log(`------------`);// Emptying the Set
// setData.clear() // clears all values in the set and returns undefined
// console.log(setData);
// console.log(`------------`);// Searching For Value
// let newValues = [2 ,2 ,3 , 5, 'A', 'Mahmoud', 9, 9];
// setData = new Set(newValues); // add won't work bc it's array, add works with single values
// console.log(setData);
// returnValue = setData.has('A'); // Search and returns true or false 
// console.log(returnValue);
// returnValue = setData.has('Mahmoud'); //case sensitive
// console.log(returnValue);
// returnValue = setData.has('mahmoud');
// console.log(returnValue);
// returnValue = setData.has(8);
// console.log(returnValue);   
// console.log(`-------------------------------`) // practice
// let setOfNumbers = new Set([10]);
// setOfNumbers.add(20).add(setOfNumbers.size);
// console.log(setOfNumbers);

//124

// // storing data
// let data = [1,1,1,2,2,3,5,"a","a","A"];
// let objData = [
//     {name : "mahmoud", age: 25},
//     {name : "Ali", age: 38},
//     {name : "lamina", age: 19}
// ];
// let newSet = new Set(data);
// // let wkSet = new WeakSet(data); //invalid
// let wkSet = new WeakSet(objData); //invalid
// console.log(`------------------`)

// //type
// console.log(newSet); 
// console.log(wkSet);
// console.log(`------------------`)

// // size
// console.log(newSet.size); 
// console.log(wkSet.size);  // undefiend no size functions for WeakSet
// console.log(`------------------`)

// // values or keys 
// console.log(newSet.values().next().value); 
// // console.log(wkSet.values().next().value);  // Error no itartor , no keys or values functions for WeakSet
// console.log(`------------------`)

// // foreach
// console.log(`----------foreach-----------`)
// newSet.forEach((el) => {console.log(el)});// weakSet cannot use foreach
// console.log(`----------Endforeach-----------`)
// console.log(`*-`.repeat(35)) // practice

//125

// let obj = {};
// let emptyObj = Object.create(null);
// let mp  = new Map();

// console.log(obj);
// console.log(emptyObj);
// console.log(mp);
// console.log(`----------------------------`)
// let newObj = {
//     10 : "Number",
//     "10" : "String"
// }
// let newMap = new Map();
// let newMap = new Map([
//     [10, "Number"],
//     ["String", "Number"]
// ]);
// newMap.set(10, "Number")
// newMap.set("String", "Number")
// console.log(newObj);
// console.log(newMap);
// console.log(`----------------------------`)

//126
// let mySet = new Set([1,2,3,4,5]);
// let myMp = new Map([["a", 1], ["b", 2], ["c", 3]]);
// let mySetArr = Array.from(mySet);
// let myMpArr = Array.from(myMp);
// let myArr = [mys]  
// console.log(myArr);

//127

// console.log(Array.from("Osama"));
// console.log(
//     Array.from("12345", function (n) {
//     return +n + +n;
//     })
// );
// console.log(Array.from("12345", (n) => +n + +n));
// let myArray = [1, 1, 1, 2, 3, 4];
// let mySet = new Set(myArray);
// console.log(Array.from(mySet));
// // console.log([...new Set(myArray)]); // Future
// function af() {
//     return Array.from(arguments);
// }
// console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));


//128
// let myArr = [1, 2, 3, 4, 5,"Osama", "Ahmed", "sayed"];
// console.log(myArr);
// myArr.copyWithin(0,3,-3)
// console.log(myArr);

//129
// let myArr = [1, 2, 3, 4, 5,"Osama", "Ahmed", "sayed"];
// let myArgs = [5,6,7,8,9];

// let checkValue = myArr.some(function (element,index) {
//     // return typeof element === "string"; // true
//     // return element > 5 ; // false
//     // console.log(element);
//     // return element > 3 ;
//     return this.includes(element);
// },myArgs);
// console.log(checkValue);

//130
// let myArr = [1, 2, 3, 4, 5,"Osama", "Ahmed", "sayed"];
// let myArgs = [5,6,7,8,9];

// let checkValue = myArr.every(function (element,index) {
//     return typeof element === "string" || typeof element === "number"; 
//     // return element > 5 ; // false
//     // console.log(element);
//     // return element > 3 ;
//     // return this.includes(element);
// },myArgs);
// console.log(checkValue);


//131
// const locations = {
//     20: "Place1",
//     30: "Place2",
//     50: "Place3",
//     40: "Place4",
// };
// let mainLocation = 15;
// let locationsArray = Object.keys(locations);
// console.log(locationsArray);
// let locationArrayNumbers = locationsArray.map((n) => +n);
// console.log(locationArrayNumbers);
// let check = locationArrayNumbers.every(function (e) {
//   return e > this;
// }, mainLocation);
// console.log(check);

//132
// console.log("Osama");
// console.log(..."Osama");
// console.log([..."Osama"]);
// console.log('===========================');
// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];
// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays);
// console.log('===========================');
// let copiedArray = [...myArray1];
// console.log(copiedArray);
// console.log('===========================');
// let test = allArrays ; 
// test.push("test");
// console.log(allArrays);
// console.log('===========================');
// let allFriends = ["Osama", "Ahmed", "Sayed"];
// let thisYearFriends = ["Sameh", "Mahmoud"];
// allFriends.push(...thisYearFriends);
// console.log(allFriends);
// console.log('===========================');
// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(...myNums));
// console.log('===========================');
// let objOne = {
//     a: 1,
//     b: 2,
// };
// let objTwo = {
//     c: 3,
//     d: 4,
// };
// console.log({ ...objOne, ...objTwo, e: 5 });
// console.log('===========================');
//133
/*
    Map And Set + What You Learn => Challenge
    Requirement
    - You Cant Use Numbers Or True Or False
    - Don't Use Array Indexes
    - You Cant Use Loop
    - You Cant Use Any Higher Order Function
    - Only One Line Solution Inside Console
    - If You Use Length => Then Only Time Only
    Hints
    - You Can Use * Operator Only In Calculation
    - Set
    - Spread Operator
    - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(
    [...n1,...n2].length * 
    Math.max(
        ...Array.from(
            new Set(n1)
        )
    )
); // 210