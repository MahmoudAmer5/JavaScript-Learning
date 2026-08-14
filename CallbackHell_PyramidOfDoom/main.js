//  179
// function redfy(e){
//     e.target.style.color = "red";
// }
// let p = document.querySelector("p");
// p.addEventListener("click",redfy)

// function callback1(){
//     console.log("i'm callback 1")
// }
// // setTimeout(callback1, 1000);

// function callback2(){
//     console.log("i'm callback 2")
// }

// function callback3(){
//     console.log("i'm callback 3")
// }

// function callback4(){
//     console.log("i'm callback 4")
// }
// console.log("----------------------");
// setTimeout(() => {
//     callback1()
//     setTimeout(() => {
//         callback2()
//         setTimeout(() => {
//             callback3()
//             setTimeout(() => {
//                 callback4()
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// 180
// let MyPromise = new Promise((resolve, reject) => {
//     let connect = new XMLHttpRequest();
//     connect.open(
//         "GET",
//         "https://api.github.com/users/MahmoudAmer5",
//         true)
//     connect.onload = () => {
//         if(connect.status === 200){
//             resolve(connect.response);
//         }else{
//             reject(Error("An Error Occured " + `Status = ${connect.status}`));
//         }
//     }
//     connect.send();
// });
// let resValue = (resolve) => {console.log(resolve)} ;
// let rejValue = (reject) => {console.log(reject)} ;
// MyPromise.then(
//     resValue,
//     rejValue
// );
// console.log(typeof MyPromise)
// MyPromise.finally(()=>{console.log(MyPromise)})

// 181
// let users = ["user1","user2","user3","user4","user5"];
// // let users = [];
// let userPromise = new Promise((resolve,reject)=>{
//     if(users.length === 5){
//         resolve(users)
//     }else{
//         reject(Error("Number of users is not 5"))
//     }
// });
// userPromise
//     .then((resolve) => {
//         resolve.length = 3; 
//         return resolve ;
//     })
//     .then((resolve) => {
//         resolve.length = 1; 
//         return resolve ;
//     })
//     .then((resolve) => {
//         console.log(`You're the Chosen one : ${resolve}`)
//     })
//     .catch((reject) => {
//         console.log(reject)
//     })

// 182
// Function that gets data from an API
// const getData = (apiLink) => {
//     // Create and return a Promise
//     return new Promise((resolve, reject) => {
//         let myData = new XMLHttpRequest();
//         myData.open("GET", apiLink, true);
//         // This runs when the request finishes loading
//         myData.onload = () => {
//             if (myData.status === 200) {
//                 resolve(JSON.parse(myData.response));
//             }
//             else {
//                 reject(Error("Error Has Occured === "));
//             }
//         }
//         myData.send();
//     });
// }
// Function that processes the data received from the API
// const processData = (api) => {
//     getData(api)
//         .then((resolve) => {        
//             resolve.length = 2;         // Number of repositories to be displayed
//             // Loop through the repositories
//             for (let i = 0; i < resolve.length; i++) {
//                 let  div = document.createElement("div");
//                 let h2 = document.createElement("h2");
//                 let p1 = document.createElement("p");
//                 h2.appendChild(document.createTextNode(`Repo Name : ${resolve[i].name}`));
//                 p1.appendChild(document.createTextNode(`ID : ${resolve[i].id}`));
//                 div.appendChild(h2);
//                 div.appendChild(p1);
//                 document.body.appendChild(div);
//             }
//         })
//         .catch((reject) => {
//             console.log(reject);
//         })
// }
// // Call processData() with the API URL
// processData("https://api.github.com/users/MahmoudAmer5/repos");

// 183
// Same Previos Code with fetch
// let api = "https://api.github.com/users/MahmoudAmer5/repos";
// fetch(api)
//     .then((result) => {
//         return result.json();
//     })
//     .then((myData)=>{
//         myData.length = 3;         // Number of repositories to be displayed
//         // Loop through the repositories
//         for (let i = 0; i < myData.length; i++) {
//             let  div = document.createElement("div");
//             let h2 = document.createElement("h2");
//             let p1 = document.createElement("p");
//             h2.appendChild(document.createTextNode(`Repo Name : ${myData[i].name}`));
//             p1.appendChild(document.createTextNode(`ID : ${myData[i].id}`));
//             div.appendChild(h2);
//             div.appendChild(p1);
//             document.body.appendChild(div);
//         }
//     })
//     .catch((reject) => {
//         console.log(Error("ERRORS"));
//     })

// 184
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("First"), 1000);
// });
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Second"), 2000);
// });
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Third"), 3000);
// });

// // if all resolved return array of the resolved if one reject return the rejected promise
// // Promise.all([p1, p2, p3])
// //     .then((result) => {
// //     console.log(result);})
// //     .catch((reject) => {
// //         console.log(`Rejected : ${reject}`);
// //     });
// // return array of all promises wiether rejected ot resolved
// // Promise.allSettled([p1, p2, p3])
// //     .then((result) => {
// //     console.log(result);})
// //     .catch((reject) => {
// //         console.log(`Rejected : ${reject}`);
// //     });
// // return the frist promise to finish weather resolved or rejected
// Promise.race([p1, p2, p3])
//     .then((result) => {
//     console.log(result);})
//     .catch((reject) => {
//         console.log(`Rejected : ${reject}`);
//     });

// 185
// function getData() {
//     return new Promise((resolve ,reject) => {
//         // get a random number between 0 - 9 
//         let number = Math.trunc(Math.random() * 10) ;
//         if(number > 3){
//             resolve(number) ;
//         }
//         else{
//             reject(Error(`Error The Number (${number}) is Not bigger than 3`))
//         }
//     });
// }
// getData()
//     .then((data)=>{
//         console.log(`Congrats your number is ${data}`)
//     })
//     .catch((rej)=>{
//         console.log(rej) ;
//     })
//     .finally(()=>{
//         console.log('Program Ended')
//     })

// another way to do the same code
// function getData() {
    //     // get a random number between 0 - 9 
    //     let number = Math.trunc(Math.random() * 10) ;
    //     if(number > 3){
        //         return Promise.resolve(number) ;
        //     }
        //     else{
//         return Promise.reject(Error(`Error The Number (${number}) is Not bigger than 3`))
//     }
// };
// getData()
//     .then((data)=>{
    //         console.log(`Congrats your number is ${data}`)
    //     })
    //     .catch((rej)=>{
    //         console.log(rej) ;
    //     })
    //     .finally(()=>{
    //         console.log('Program Ended')
    //     })

// another way to do the same code with async
// async function getData() {
//         // get a random number between 0 - 9 
//         let number = Math.trunc(Math.random() * 10) ;
//         if(number >= 3){
//             return number ;
//         }
//         else{
//             throw new Error(`Error The Number (${number}) is Not bigger than 3`);
//         }
// };
// getData()
//     .then((data)=>{
//             console.log(`Congrats your number is ${data}`)
//         })
//         .catch((rej)=>{
//             console.log(rej) ;  
//         })
//         .finally(()=>{
//             console.log('Program Ended')
//         })

// 186 - 187
// async function getData() {
//     // get a random number between 0 - 9
//     let number = Math.trunc(Math.random() * 10);
//     if (number >= 3) {
//         return number;
//     } else {
//         throw new Error(`Error The Number (${number}) is Not bigger than 3`);
//     }
// }
// async function main() {
//     console.log("Before the Promise");
//     // console.log(await getData().then((data)=>{console.log(`Congrats your number is ${data}`)}))
//     // console.log(await getData().catch((rej)=>{console.log(rej)}))
//     try {
//         let data = await getData();
//         console.log(`Congrats your number is ${data}`);
//     } catch (rej) {
//         console.log(rej);
//     } finally {
//         console.log("Program Ended");
//     }
//     console.log("After the Promise");
// }
// main();

// let api = "https://api.github.com/users/MahmoudAmer5/repos";
// async function main(api) {
//     console.log("Before");
//     // console.log(await getData().then((data)=>{console.log(`Congrats your number is ${data}`)}))
//     // console.log(await getData().catch((rej)=>{console.log(rej)}))
//     try {
//         let data = await fetch(api);
//         console.log(await data.json())
//     } catch {
//         console.log("Error");
//     } finally {
//         console.log("Program Ended");
//     }
//     console.log("After");
// }
// main(api);


// Assignments
// 1 
// let myObjects = new Promise((resolve, reject) => {
//     let recivedData = new XMLHttpRequest();
//     recivedData.open("GET","./test.json",true)
//     recivedData.onload = ()=>{
//         if(recivedData.status === 200){
//             resolve(JSON.parse(recivedData.responseText));
//         }else{
//             reject(new Error("Error could not get the data"))
//         }
//     }
//     recivedData.send()
// })
//     .then((Data)=>{
//         Data.length = 5 ;
//         for(let count = 0 ; count < Data.length ; count++){
//             let div = document.createElement("div");
//             let title = document.createElement("h3");
//             let desc = document.createElement("p");
//             title.appendChild(document.createTextNode(`${Data[count]["title"]}`));
//             desc.appendChild(document.createTextNode(`${Data[count]["description"]}`))
//             div.appendChild(title)
//             div.appendChild(desc)
//             document.body.appendChild(div);
//         }
//     })
//     .catch((reject)=>{console.log(reject)})

// 2
let api = "./test.json" ;

async function main(api){
    // wait for the fetch to complete 
    // and then wait for the response to be converted to json
    let Data = await(await fetch(api)).json();  
    Data.length = 5 ;
    for(let count = 0 ; count < Data.length ; count++){
    let div = document.createElement("div");
    let title = document.createElement("h3");
    let desc = document.createElement("p");
    title.appendChild(document.createTextNode(`${Data[count]["title"]}`));
    desc.appendChild(document.createTextNode(`${Data[count]["description"]}`))
    div.appendChild(title)
    div.appendChild(desc)
    document.body.appendChild(div);
}
}
main(api)















