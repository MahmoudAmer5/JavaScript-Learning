let myHeader_1 = document.getElementsByTagName("h1");
let mySpan = document.getElementsByClassName("mySpan");
let myDiv_1 = document.getElementsByClassName("myDiv_1");
let myDiv_2 = document.getElementById("myDiv_2");
let myparagraph = document.querySelector("p");
let myparagraphs = document.querySelectorAll(".myDiv_1 p");
console.log(myHeader_1);
console.log(mySpan);
console.log(mySpan[1]);
console.log(myDiv_1);
console.log(myparagraph);
console.log(myparagraphs);
console.log(myparagraphs[0]);
console.log(myDiv_2);
console.log("=========================================");
let pageTitle = document.title;
let pageBody = document.body;
let pageForms = document.forms;
let pageImages = document.images;
let pageLinks = document.links;
console.log(pageTitle);
console.log(pageBody);
console.log(pageForms);
console.log(pageForms[1]);
console.log(pageImages);
console.log(pageLinks);
console.log(pageLinks[0]);
console.log(pageLinks[1].href);
console.log("==========innerHTML||textContent==========");
console.log(myDiv_1[0].innerHTML);
console.log(myDiv_1[0].textContent);
console.log(myDiv_2.innerHTML);
console.log(myDiv_2.textContent);
console.log("--------------------------");
myDiv_1[0].innerHTML = "<p>Paragraph 1 after change</p><p>Paragraph 2 after change</p>";
// myDiv_1[0].textContent = "<p>Paragraph 1 after change</p><p>Paragraph 2 after change</p>";
console.log(myDiv_1[0].innerHTML);
console.log(myDiv_1[0].textContent);
console.log("--------------------------");
myDiv_1[0].innerHTML = `
<p>Paragraph 1 after change</p>
<p>Paragraph 2 after change</p>
<img src="" alt="nothing">Image</img>`;
document.images[0].src = "logo.PNG" ;
document.images[0].alt = "If you See this, then Code is Right and source is wrong" ;
document.images[0].className = "testImage" ;
console.log("--------------------------");
console.log(document.links[0].getAttribute("href"));
console.log(document.links[1].getAttribute("class"));
document.links[0].innerText = "ChatGpt"
document.links[0].setAttribute("href" ,"https://chatgpt.com/")
document.links[1].setAttribute("class", "newClass")
console.log("=========================================");

// let paragraph = document.querySelector("p");
// console.log(paragraph.attributes);
// console.log(paragraph.hasAttribute("name"));
// if(paragraph.hasAttribute("data-src")){
//     if(paragraph.hasAttribute("data-src") === ""){
//         paragraph.removeAttribute("data-src");
//     }else{
//         paragraph.setAttribute("data-src","newValue")
//     }
// }else{  
//     console.log("Not Found");
// }




