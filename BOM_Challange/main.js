// Declaration 
let input = document.querySelector(".input");
let add = document.querySelector(".add");
let container = document.querySelector(".container");
let id = 0 ;
let title = "";
// Events Listener
window.addEventListener("load", ()=> {
    if(localStorage.length !== 0){
        for(let index = 0 ; index < localStorage.length; index++){
            // Fetch each id 
            let id = `${localStorage.key(index)}`;
            // Fetch each value based on the id
            let title = localStorage.getItem(id);
            // remove the "task_" part to be sent 
            id = id.slice(5);
            NewTask(title, id);
        }
    }
});

add.addEventListener("click",() => {
    if (input.value.trim() !== ""){
        id = Math.ceil(Math.random()*100000);
        title = `${input.value}`;
        window.localStorage.setItem(`task_${id}`,`${title}`);
        // Creating the new Task elements
        NewTask(title, id);
        // Reset the input value
        input.value = "";
    }else{
        input.value = "";
    }
});

function NewTask(title,id){
    // Creating the Elements
    let task = document.createElement("div");
    let p = document.createElement("p");
    let deleteBtn = document.createElement("button");
    // Setting the Elements Values And attributes
    task.classList = `task_${id}`;
    p.innerHTML = title;
    deleteBtn.classList = `delete`;
    deleteBtn.innerHTML = `Delete`;
    deleteBtn.addEventListener("click",(e)=>{
        window.localStorage.removeItem(`${e.currentTarget.parentElement.classList[0]}`);
        e.currentTarget.parentElement.remove();
    });
    // Css
    task.style =`
        display : flex;
        justify-content: space-between;
        background-color: #ffffff;
        margin: 20px;
        border : solid black 2px ; 
        border-radius: 10px;
    `;
    p.style =`
        padding : 0px;
        padding-left : 10px;
        font-weight : bold;
        font-size : 20px;
        font-family: 'Courier New', Courier, monospace;
    `;
    deleteBtn.style =`
        background-color : #ff0000 ;
        margin : 10px;
        border-radius: 10px;
        font-weight : bold;
        font-size : 20px;
        font-family: 'Courier New', Courier, monospace;
    `;
    // adding Elements to the page
    task.append(p);
    task.append(deleteBtn);
    container.appendChild(task)
}

console.log();
