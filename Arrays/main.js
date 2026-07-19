
// let arr = [
//     "mahmoud", 
//     "amer", 
//     25, 
//     true, 
//     [10, 5, 2001]];
// console.log(arr[0]);
// console.log(arr[4][1]);
// arr[0] = "Ali" ;
// console.log(arr);
// console.log(arr.length);
// console.log(Array.isArray(arr));
// arr[arr.length] = "test" ;
// console.log(arr.pop()); 
// console.log(arr)

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.shift();
// numbers.unshift(0);
// numbers.pop();
// numbers.push(9);
// console.log(numbers);

// let names = ["mahmoud", "amer", "ali", "ahmed", "mohamed", "sara", "mona", "aya"];
// console.log(names.indexOf("aaaaa"));
// console.log(names.indexOf("sara"));
// console.log(names.includes("ali"));

// let numbers = [8, 6, 42, 87, 5, 4, 5, 1, 0, 5, 8];
// let names = ["mahmoud", "amer", "ali", "ahmed", "mohamed", "sara", "mona", "aya"];
// let random = [8, "mahmoud", true, 5, "ali", false, 0, "sara", 1, "aya", 2, "mona", 3, "ahmed", 4, "mohamed", 5];    

// console.log(numbers.sort());
// console.log(names.sort());
// console.log(random.sort());

// console.log(numbers.reverse());
// console.log(names.reverse());
// console.log(random.reverse());

// console.log(numbers.sort().reverse());
// console.log(names.reverse().sort());


// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.splice(0, 2 ,"A", "B", "C", "D", "E");
// console.log(numbers);   // ["A", "B", "C", "D", "E", 2, 3, 4, 5, 6, 7, 8, 9]

// let names = ["Ahmed", "Mazero", "Elham"];
// let numbers = [1, 2, 3, 4];
// let concat_1 = names.concat(numbers, ["A", "B", "C"]);
// let concat_2 = numbers.concat(names);
// let join_1 = concat_1.join(" ");
// let join_2 = concat_2.join(" | ");
// console.log(concat_1); // ["Ahmed", "Mazero", "Elham", 1, 2, 3, 4, "A", "B", "C"]
// console.log(concat_2); // [1, 2, 3, 4, "Ahmed", "Mazero", "Elham"]
// console.log(join_1);   // "Ahmed Mazero Elham 1 2 3 4 A B C"
// console.log(join_2);   // "1 | 2 | 3 | 4 | Ahmed | Mazero | Elham"

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
let newMy = my.reverse();
// newMy.shift();
// newMy.shift();
// document.write(newMy); // ["Osama", "Elham", "Mazero", "Ahmed"];

// newMy = newMy.splice(counter);
// newMy.pop();
// document.write(newMy); // ["Elham", "Mazero"]
