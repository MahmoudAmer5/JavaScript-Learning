// 1
// let fileName = "Elzero.php";
// console.log(fileName.match(/\w+/g)[0]);
// console.log(fileName.match(/\w+/g)[1]);

// 2
// function addEl(str) {
//     if(str === ""){
//         return str;
//     }else if(str.slice(0,2) === "El"){
//         return str;
//     }else{
//         str = "El" + str;
//         return str;
//     }
// }
// console.log(addEl("")); // ""
// console.log(addEl("Elzero")); // Elzero
// console.log(addEl("zero")); // Elzero

// 3 
// let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
// let reg = /[a-z0-9\s]+@[a-z0-9\s]+/i ;
// console.log(myString.match(reg)[0])

//4
// function checkRange(n1, n2, n3, n4, n5) {
//     let min = Math.min(n1 ,n2 ,n3);
//     let max = Math.max(n1 ,n2 ,n3);
//     if(min >= n4 && max <= n5){
//         return "Yes All Numbers In Range"
//     }else{
//         return"Not All Numbers Is In Range";
//     }
// }
// console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
// console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
// console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range

// 5
// function replaceFirstWithLast(word) {
//     let wordarr = word.split("");
//     [wordarr[0],wordarr[wordarr.length -1]] =[wordarr[wordarr.length -1],wordarr[0]]
//     return wordarr.join("");
// }
// console.log(replaceFirstWithLast("olzerE")); // Elzero
// console.log(replaceFirstWithLast("Hello")); // oelloH

// 6
// function checkBiggestNum(word) {
//     return word.split("").sort().at(-1);
// }
// console.log(checkBiggestNum("1500654")); // 6
// console.log(checkBiggestNum("8509507")); // 9

// 7 
// let nums = [20, 100, 50, 10, 15, -20, 30];
// nums = nums.sort((a, b) => a - b);
// nums = nums.slice(nums.length-2,nums.length)
// console.log(nums)

// 8
// let nums = [10, 80, 85, 25, 30, 88, 15];
// let goal = 100;
// nums = nums.sort((goal, b) => goal - b);
// console.log(nums[nums.length -1]);

// 9 
// function swapEveryTwoChars(word) {
//     let arr = word.split("");
//     for(let i = 0; i < arr.length ; i = i + 2){
//         if(arr[i] === arr[i].toUpperCase()){
//             arr[i] = arr[i].toLowerCase();
//         }else{
//             arr[i] = arr[i].toUpperCase();
//         }
//     }
//     return arr.join("");
// }
// console.log(swapEveryTwoChars("elZeRo")); // Elzero
// console.log(swapEveryTwoChars("heLlO")); // Hello

// 10
// String.prototype.elzeroRepeat = function (num){
//     let result = "";
//     for (let i = 0; i < num; i++) {
//         result += this;
//     }
//     return result;
// }
// console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero

// 11
// let myMoney = 5301503206;
// console.log(myMoney)
// console.log(myMoney.toString().match(/\d{1,3}(?=(\d{3})*$)/g).join(","));

// 12
// let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
// let result = [];
// let reg = /([0-9a-z])\w+\1/ig;
// console.log(names.join(" ").match(reg)); // ['Osso', 'Aola', 'Daad', 'Roor']

// 13
// let theName = "Elzero";
// console.log(theName[0] + theName[theName.length - 1]);
// console.log(theName.slice(1,5));
// console.log(theName.slice(2,4));

// 14
// function repeatWithRules(word) {
//     let result = "";
//     for(let index = 0; index < word.length ;index ++){
//         result = result + word[index].repeat(index + 1);
//     }
//     return result;
// }
// console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
// console.log(repeatWithRules("Hello")); // Heelllllllooooo

// 15
// function concatenateWithoutLast(words) {
//     for (let i = 0 ;i < words.length ;i ++){
//         words[i] = words[i].split("")
//         words[i].pop()
//         words[i] = words[i].join("")
//     }
//     return words.join(" ");
// }
// console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School

// 16
// function getCharacters(word, nums) {
//     return word.slice(0,nums) + word.slice(word.length - nums, word.length);
// }
// console.log(getCharacters("Elzero School", 2)); // Elol
// console.log(getCharacters("Elzero School", 3)); // Elzool

// 17
// function formatName(theName) {
//     theName = theName.split(" ")
//     let result = "" ;
//     result += theName[0][0].toUpperCase()
//     for(let i = 1; i < theName.length ; i++){
//         result += theName[i][0].toLowerCase()
//     }
//     return result ;
// }
// console.log(formatName("Osama Elzero")); // O.e
// console.log(formatName("Elzero Web School")); // E.w.s

// 18
// let st = "elzero";
// console.log(st[0].toUpperCase() + st.slice(1));
// console.log(st.charAt(0).toUpperCase() + st.slice(1));
// console.log(st.substring(0, 1).toUpperCase() + st.substring(1));
// console.log(st.substr(0, 1).toUpperCase() + st.substr(1));
// console.log(st.replace(st[0], st[0].toUpperCase()));
// console.log(`${st[0].toUpperCase()}${st.slice(1)}`);
// console.log(st.replace(/^./, st[0].toUpperCase()));

// 19
// function getLastDigit(num) {
//     return Number(String(num).split("").pop());
// }
// console.log(getLastDigit(1)); // 1
// console.log(getLastDigit(18)); // 8
// console.log(getLastDigit(305)); // 5
// console.log(getLastDigit(1569)); // 9
// console.log(typeof getLastDigit(1569)); // Number

// 20
// let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// myArr = []
// myArr.length = 0;
// while (myArr.length) { myArr.pop()}
// while (myArr.length) { myArr.shift()}
// console.log(myArr)

// 21
// let myArr = ["69", "108", "122", "101", "114", "111"];
// let result = "";
// for(let i = 0 ;i < myArr.length ;i++){
//     result += String.fromCharCode(Number(myArr[i]))
// }
// console.log(result); // Elzero

// 22
// function customMerge(...arr){
//     let result = [] ;
//     for(let i = 0 ;i < arr.length ; i++){
//         for(let j = 0;j < arr[i].length ; j++){
//             result.push(Number(arr[i][j]))
//         }
//     }
//     return result;
// }
// console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]));

// 23
// console.log("%cElzero Web School", "background-color: blue; color: white;padding: 5px;");

// 24
// let arr = [1, 1, 1, 2, 3, 4, 3];
// // let mySet = new Set(arr);
// // let uniqueElements = new Array(...mySet.values());
// // console.log(uniqueElements); // [1, 2, 3, 4]
// let uniqueElements = [...new Set(arr)];
// console.log(uniqueElements); // [1, 2, 3, 4]

// 25
// let serial = "";
// let random ; 
// for(let i = 0 ; i < 20 ; i ++){
//     random = 48 + Math.trunc(Math.random() * (122- 48 + 1) ) 
//     if ((random >= 58 && random <= 64) || (random >= 91 && random <= 96)){
//         i -- ;
//         continue;
//     }
//     serial += String.fromCharCode(random)
// }
// console.log(serial)
















