// let names = ["mahmoud", "ali", "mona", "hana"];
// names = names.map(el => el[0].toUpperCase().concat(el.slice(1)));
// console.log(names);

// let name = "MahMOuD" ;
// let Numbers = [5,-6,-8,16,-4,-6,14];
// let ignorNumbers = "ka25r1im12a";
// let newName = name.split("").map((el) => el === el.toUpperCase()?el = el.toLowerCase():el = el.toUpperCase());
// newName = newName.join("");
// let newNumbers = Numbers.map((el) => el = -el);
// let newIgnoreNumbers = ignorNumbers.split("").map((el) => isNaN(parseInt(el))? el:"")
// newIgnoreNumbers = newIgnoreNumbers.join("");
// console.log(`Old Values is : ${name}`);
// console.log(`new Values is : ${newName}`);
// console.log(`Old Values is : ${Numbers}`);
// console.log(`new Values is : ${newNumbers}`);
// console.log(`Old Values is : ${ignorNumbers}`);
// console.log(`new Values is : ${newIgnoreNumbers}`);


// let names = ["Antonella", "Dodson", "Steven", "Gates", "Melina", "Nash", "Chandler", "Wilson", "Luna", "Leonard", "John", "David", "Michael", "James", "Daniel","Joseph", "Andrew", "Chris", "Ryan", "Adam","Noah", "Liam", "Lucas", "Ethan", "Mason","Ava", "Emma", "Olivia", "Sophia", "Isabella","Mia", "Charlotte", "Amelia", "Harper", "Evelyn","Abigail", "Emily", "Ella", "Scarlett", "Grace",];
// let numbers = [74, 6, 1, 3, 23, 12, 6, 9];
// let newNames = names.filter(function(el){
//     return el[0] === "A"; 
// });
// let newNumbers = numbers.filter(function (el){
//     return el % 2 === 0 ?true : false ;
// });
// console.log(`Old Values is : ${names}`);
// console.log(`new Values is : ${newNames}`);
// console.log(`Old Values is : ${numbers}`);
// console.log(`new Values is : ${newNumbers}`);


// let sentance = "I Love Foooood Code Soo Playing Much";
// let mixed = "L3e2o5n5a2r4d";
// let result = 1 ;
// let newSentance = sentance.split(" ").filter(function (el){
//     return el.length <= 4 ? true : false ;
// }).join(" ");
// // return only string
// let newMixed = mixed.split("").filter(function (el){
//     return isNaN(parseInt(el))?true:false;
// }).join("");
// // return numbers then multiply them
// let mixedResult = mixed.split("").filter(function (el){
//     return isNaN(parseInt(el))?false:true;
// }).map((el)=> result = result*el);
// console.log(`Old Values is : ${sentance}`);
// console.log(`new Values is : ${newSentance}`);
// console.log(`Old Values is : ${mixed}`);
// console.log(`new Values is : ${newMixed}`);
// console.log(`Old Values is : ${mixed}`);
// console.log(`new Values is : ${mixedResult}`);
// console.log(`result of ${mixed} =  ${result}`);


// let numbers = [30, 20, 10, 5, 10];
// let result = numbers.reduce(function (acc, currant, index, arr){
//     console.log(acc);
//     console.log(currant);
//     console.log(index);
//     console.log(arr);
//     return acc + currant;
// });
// console.log(`result is : ${result}`);

// let names = ["Dodson", "Steven", "Gates", "Antonella", "Melina", "Nash"]
// let mix = ["A","@","n","t","@","o","n","@","e","@","@","l","l","a"];
// let result ;
// let longistName = names.reduce(function (acc,currant,index,arr){
//     currant.length >= acc.length ? result = currant: result = acc; 
//     return result;
// });
// let unMix = mix.filter(function (el){
//     return el !== "@"? true : false ;
// }).reduce(function (acc, currant,index){
//     return acc + currant ;
// });
// console.log(`The Names are   : ${names}`);
// console.log(`longist word is : ${result}`);
// console.log(`The Mixed name : ${mix}`);
// console.log(`The unMixed name : ${unMix }`);



allLis = document.querySelectorAll("ul li");
allDivs = document.querySelectorAll(".content div");
allLis.forEach(function (ele, index){
    ele.onclick = function(){
        // remove active class from all
        allLis.forEach(function (ele){
            ele.classList.remove("active");
        });
        // add active to only this element
        this.classList.add("active");
        console.log(allLis);
        // hide all divs
        allDivs.forEach(function (ele){
            ele.style.display = "none";
        });
        // show the corrosponding div
        allDivs[index].style.display = "block";
    }
});




