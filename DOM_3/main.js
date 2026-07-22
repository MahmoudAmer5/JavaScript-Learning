let myForm = document.forms[0];
let userName = document.querySelector("[name = 'userName']");
let userPassword = document.querySelector("[name = 'password']");
window.onload = ()=>{
    userName.focus();
}
// userName.onblur = ()=>{
    //document.links[0].click();
// }
// document.links[0].onmouseenter= ()=>{
//     userName.focus();
// }
document.links[0].onmouseleave = ()=>{
    userName.focus();
}
if(!document.forms[0].hasAttribute("method")){
    document.forms[0].method = "POST";
}
document.forms[0].onsubmit = (e)=>{
    let nameValid = false ;
    let passwordValid = false ;
    if (userName.value == "" | userName.value.length > 10){
        nameValid = false;
    }else{
        nameValid = true;
    }
    if (userPassword.value.length < 8){
        passwordValid = false;
    }else{
        passwordValid = true;
    }
    nameValid&&passwordValid?null:e.preventDefault();;
};
let cloneCount = 0 ;
let myP = document.getElementsByClassName("testParagraph1");
myP[0].addEventListener("click",() => {
    let newP = myP[0].cloneNode(true);
    cloneCount = cloneCount + 1;
    newP.className = `clone`;
    document.body.appendChild(newP);
});
let clonedP = document.querySelectorAll(".clone");
document.addEventListener("click", (event) => {
    if (event.target.className == `clone`) {
        console.log(event.target.innerHTML);
    }
});

myForm.addEventListener("submit", () => {
    console.log("submitted");
});


let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
div1.appendChild(document.createTextNode("Div1"));
div2.appendChild(document.createTextNode("div2"));
div3.appendChild(document.createTextNode("div3"));
div4.appendChild(document.createTextNode("div4"));
myForm.before(div1);
myForm.after(div2);
myForm.prepend(div3);
myForm.append(div4);
// console.log(div3.nextSibling);
// console.log(div3.nextElementSibling);
// console.log(div4.previousSibling);
// console.log(div4.previousElementSibling);
// console.log("-------------------------");
// console.log(div1.parentElement);
// console.log(div2.parentElement);
// console.log(div3.parentElement);
// console.log(div4.parentElement);
div1.remove();
div2.remove();
div3.remove();
div4.remove();




