let count = 0;
let names = ["Mahmoud", "Sara", "Ali", "Mona", "Osama", "Kait"];
let random = [3, 5, "Mona", "Osama", 4, "Sara", "Ali", 0, "Mahmoud", 6];

// for(count = 0; count < 10 ; count++){
//     document.write(count);
// }
// document.write("</br>"+"------------------"+"</br>");
// for(count = 0; count < names.length; count++){
//     document.write(names[count]+ "</br>");
// }
// document.write("</br>"+"------------------"+"</br>");

// let newArr = [] ;
// for(count = 0 ; count < random.length ; count++){
//     if(typeof random[count] === "string"){
//         newArr.push(random[count]);
//     }
// }

// for(count = 0; count < newArr.length; count++){
//     document.write(newArr[count]+ "</br>");
// }

// document.write("</br>"+"------------------"+"</br>");
// let model = ["","keyboard","screen"," ","mouse","headphone"];
// let color = ["red" , "blue" , "grean"]
// let year = [2020,2021,2022, 2023,2024]

// modelLoop:for(let modelCount = 0; modelCount < model.length ; modelCount++){
//     if(model[modelCount] === "" ||model[modelCount] === " "){
//         continue ;
//     }
//     colorLoop:for(let colorCount = 0; colorCount < color.length ; colorCount++){
//         yearLoop:for(let yearCount = 0; yearCount < year.length ; yearCount++){
//             if(year[yearCount] < 2023){
//                 continue ;
//             }
//             document.write(`We have a ${model[modelCount]} ---Colored ${color[colorCount]} from year------- ${year[yearCount]} </br>`);
//         }
//     }
// }

// document.write("</br>"+"------------------"+"</br>");

// let randoms = [6,"ahmed", "ali", 4, "mona", "celia", 15, 3,];
// let randomsCount = 0

// for (;;){
//     if(randomsCount === randoms.length){
//         break;
//     }
//     console.log(`${randoms[randomsCount]} </br>`);
//     randomsCount += 3;
// }

// let product = ["mousepad","keyboard","screen","gaming chair","mouse","headphone"];
// let color = ["red" , "blue" , "grean"]
// let numberofproductsperpage = 3 ;

// document.write(`<h1>products count ${numberofproductsperpage}</h1>`);
// for(let productcount = 0; productcount < product.length ; productcount++){
//     if(productcount >= numberofproductsperpage ){
//         break;
//     }
//     document.write(`
//         <div class = "card">
//             <h2>${productcount + 1} : ${product[productcount]}</h2>
//             <p>Colors :</br>
//             ${color[0]}</br>
//             ${color[1]}</br>
//             ${color[2]}</br>            
//             </p>
//         </div>
//     `);
// }

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Samera","Mahmoud"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar","Mo Salah"];
let myAdminsCount = 0 ;
let count_3 = 0;
for(;;){
    if(myAdmins[myAdminsCount] === "Stop"){
        break;
    }
    else if (myAdminsCount === myAdmins.length){
        break;
    }
    myAdminsCount++
}
document.write(`<div>We Have ${myAdminsCount} Admins</div>`);
for(let count = 0;count < myAdminsCount;count++){
    document.write(`<hr>`);
    document.write(`<div>The Admin For Team ${count + 1} Is ${myAdmins[count]}`);
    document.write(`<h3>Team Members</h3>`);
    for(let count_2 = 0 ; count_2 < myEmployees.length;count_2++){
        if(myAdmins[count][0] !== myEmployees[count_2][0] ){
            continue;
        }
        count_3++
        document.write(`<p>-${count_3} ${myEmployees[count_2]}</p>`);
    }
    document.write(`</div>`);
    count_3 = 0;
}

















