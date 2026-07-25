// 102
// window.console.log("GoodMorning")
// window.document.title = "Good Morning";

// 103 
/* alert(message)   ---> not usually used
confirm(message) ---> not usually used
prompt(message , defualt message) ---> not usually used
Freezes the page until the alert is done */
// there's liberaries used as alternative alert (sweetalert2)
// window.alert("window");
// this.alert("this");
// alert("alert");
// console.log("alert");

// window.confirm("window");
// this.confirm("this");
// let confirmValue = confirm("Are you sure ?");
// console.log(confirmValue);
// confirmValue ? console.log("Confirmed"):console.log("Rejected");

// window.prompt("prompt");
// this.prompt("prompt");
// let promptValue = prompt("Enter your Age : ");
// (promptValue !== null || promptValue !== "" )? console.log(`your Age is : ${promptValue}`):console.log(`Not valid`)

// 104
/* 
setTimeout  (Function,Timeout,additional params)
clearTimeout(identfier)
*/
// let promptTime = prompt("Enter the time");
// let user = "Mahmoud";
// let counter = setTimeout(msg,promptTime*1000,promptTime,user);
// function msg(promptTime,user){
//     alert(`mr ${user} : ${promptTime} has passed`);
// }
// let btn = document.getElementById("stop");
// btn.onclick = ()=>{
//     clearTimeout(counter);
//     console.log("timer stopped");
// }

// 105
/*  - setInterval(Function, Millseconds, Additional Params)
    - clearInterval(Identifier)
*/
let div = document.getElementById("counter");
let stopBtn = document.getElementById("stop");
let playBtn = document.getElementById("play");
let resetBtn = document.getElementById("reset");
let counter = 0 ;
function msg(){
    div.innerHTML = +div.innerHTML + 1;
}
stopBtn.onclick = ()=>{
    clearInterval(counter);
    console.log("Interval stopped");
    playBtn.removeAttribute("disabled","")
    stopBtn.setAttribute("disabled","")
    resetBtn.removeAttribute("disabled","")
}
playBtn.onclick = ()=>{
    counter = setInterval(msg,1000);
    console.log("Interval played");
    playBtn.setAttribute("disabled","")
    stopBtn.removeAttribute("disabled","")
}
resetBtn.onclick = ()=>{
    div.innerHTML = 0;
    resetBtn.setAttribute("disabled","")
}

// 106
/*
    - location Object
    --- href Get / Set [URL || Hash || File || Mail]
    --- host
    --- hash
    --- protocol
    --- reload()
    --- replace()
    --- assign()
*/
// console.log(location.href);
// location.href = "https://www.google.com"
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier"
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.hash);
// window.location.reload();
/*replace Removes the Currant Entry from the history*/
// location.replace("https://developer.mozilla.org/en-US/docs/Web/JavaScript");
/*replace Removes the Currant Entry from the history*/
// location.assign("https://developer.mozilla.org/en-US/docs/Web/JavaScript");

// 107
/*
    - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
    - close()
    - Window Features
    --- left [Num]
    --- top [Num]
    --- width [Num]
    --- height [Num]
    --- menubar [yes || no]
*/
// setTimeout(() => {
//     window.open("https://www.chatgpt.com","","new window",);
//     console.log("Time passed");
// }, 3000);

// 108
/*
    - History API
    --- Properties
    ------ length
    --- Methods
    ------ back()
    ------ forward()
    ------ go(Delta) => Position In History
*/

// 109
/*
    - stop()
    - print()
    - focus()
    - scrollTo(x, y || Options)
    - scroll(x, y || Options)
    - scrollBy(x, y || Options)
*/
// let NewWindow = window.open("https://google.com", "", "width=500,height=500");
// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });

// 110
/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/
// console.log(window.scrollX === window.pageXOffset);
// let btn = document.getElementById("scroll");
// window.onscroll = function () {
//   if (window.scrollY >= 600) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };
// btn.onclick = function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// };

// 111
/*
    Local Storage
    - setItem
    - getItem
    - removeItem
    - clear
    - key
*/

// localStorage.setItem("name" , "mahmoud");
// localStorage.age = '25';
// localStorage.color = "#11f111";
// console.log(localStorage);
// console.log(localStorage.getItem("age"));
// console.log(localStorage.color);
// localStorage.removeItem("age");
// console.log(localStorage);
// localStorage.clear();
// console.log(localStorage);

//112

let box = document.getElementById("box");
let boxColor = document.getElementById("boxColor");
    box.style =`
    height : 300px; 
    width  : 300px  ;
    background-color : ${localStorage.color};
`;
boxColor.addEventListener("input",()=>{
    localStorage.color = boxColor.value;
    box.style =`
    height : 300px; 
    width  : 300px  ;
    background-color : ${localStorage.color};
    `;
})  
