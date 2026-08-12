// 169 
/*
    What Is JSON ?
    - JavaScript Object Notation
    - Format For Sharing Data Between Server And Client
    - JSON Derived From JavaScript
    - Alternative To XML
    - File Extension Is .json

    Why JSON ?
    - Easy To Use And Read
    - Used By Most Programming Languages And Its Frameworks
    - You Can Convert JSON Object To JS Object And Vice Versa

    JSON vs XML
    ===================================================
    = Text Based Format      = Markup Language        =
    = Lightweight            = Heavier                =
    = Does Not Use Tags      = Using Tags             =
    = Shorter                = Not Short              =
    = Can Use Arrays         = Cannot Use Arrays      =
    = Not Support Comments   = Support Comments       =
    ===================================================
*/
// 170
/*
    JSON Syntax
    - Data Added Inside Curly Braces {  }
    - Data Added With Key : Value
    - Key Should Be String Wrapped In Double Quotes
    - Data Separated By Comma
    - Square Brackets [] For Arrays
    - Curly Braces {} For Objects

    Available Data Types
    - String
    - Number
    - Object
    - Array
    - Boolean Values
    - null
*/
// 171
/*
    JSON
    - API Overview
    - Tools To Test API
    - Preview Github API
*/
// 172  
// const serverResponse = `[
//     {"name":"mahmoud",
//     "age":25,
//     "bD":"10 5 2001",
//     "Available":false,
//     "work place":null}
//     ]`;
// console.log(serverResponse);
// console.log(typeof serverResponse);
// console.log("=".repeat(50));
// const jsObj = JSON.parse(serverResponse);
// console.log(jsObj);
// console.log(typeof jsObj);
// console.log("=".repeat(50));
// jsObj[0].name = "Ali";
// jsObj[0].age = "30";
// jsObj[0]["work place"] = "Aswan";
// console.log(jsObj);
// console.log("=".repeat(50));
// const jsonObj = JSON.stringify(jsObj);
// console.log(jsonObj);
// console.log(typeof jsonObj);
// console.log("=".repeat(50));

// 173
// Synchronous - run in order
// console.log("1")
// console.log("2")
// console.log("3")
// window.alert("Interrupted")
// console.log("4")
// console.log('5')
// Asynchronous - run in parallel
// console.log("1")
// console.log("2")
// console.log("3")
// setTimeout(() => {
//     window.alert("Interrupted")
// }, 2000);
// console.log("4")
// console.log('5')

// 174
// setTimeout(() => {
//     console.log("Web API");
// }, 0);
// function one() {
//     console.log("One");
// }
// function two() {
//     one();
//     console.log("Two");
// }
// function three() {
//     two();
//     console.log("Three");
// }
// three();
// console.log("#####");
// console.log("1");
// console.log("2");
// console.log("3");

// 175
// console.log("1")
// setTimeout(() => {
//     console.log("one")
// }, 1);
// setTimeout(() => {
//     console.log("Zer0")
// }, 0);
// console.log("2")
// setTimeout(() => {
//     console.log(myVar)  // NO Error - 100
// }, 0);
// // console.log(myVar)   // Error
// let myVar = 10 ;
// myVar *= myVar ;

// 176
// let req = new XMLHttpRequest();
// console.log(req)

// 177-  178
// let myReq = new XMLHttpRequest();
// let text ;
// myReq.open("GET", "https://api.github.com/users/MahmoudAmer5/repos",true)
// myReq.send()
// myReq.onreadystatechange = () => {
//     if (myReq.status == 200 && myReq.readyState == 4){
//         text = JSON.parse(myReq.responseText);
//         console.log(text)
//         for(let i of text){
//             let div = document.createElement("div");
//             let repo = document.createTextNode(i.name);
//             div.appendChild(repo)
//             document.body.appendChild(div)
//         }
//     }
// }
// console.log("*".repeat(50))
// console.log(myReq);

// Assignments
// 1 - 2 - 3 - 4 
let jsonfile = new XMLHttpRequest();
jsonfile.open(
    "GET",
    "test.json",
    true
)
async function jsondata() {
    jsonfile.onload = ()=>{
        if(jsonfile.status == 200){
            console.log("Data Loaded");
            let mainData = JSON.parse(jsonfile.responseText);

            let divdata = document.createElement("div");
            divdata.id = "data";
            for(let count = 0; count < mainData.length ; count++){
                mainData[count]["category"] = "All" ;
                console.log(mainData[count]);

                let div = document.createElement("div");
                let h2 = document.createElement("h2");
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let p3 = document.createElement("p");
                h2.appendChild(document.createTextNode(`${mainData[count]["title"]}`))
                p1.appendChild(document.createTextNode(`${mainData[count]["content"]}`))
                p2.appendChild(document.createTextNode(`Author: ${mainData[count]["author"]}`))
                p3.appendChild(document.createTextNode(`Category: ${mainData[count]["category"]}`))
                div.appendChild(h2);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                divdata.appendChild(div);
            }
            document.body.appendChild(divdata);
            let updatedData = JSON.stringify(mainData);
            console.log(updatedData);
        }else{
            console.log(jsonfile.status);
        }
    }
}
jsonfile.send()
jsondata();











