// let container = document.createElement("div");
// let containerHeader = document.createElement("h2");
// let containerParagraph = document.createElement("p");
// let containerAttribute = document.createAttribute("data-cardId");
// let containerText = document.createTextNode("This's a created Text header");
// let containerComment = document.createComment("This's a Created Comment")
// let pageBody = document.body;
// pageBody.appendChild(container);
// container.prepend(containerComment);
// container.appendChild(containerHeader);
// container.appendChild(containerParagraph);
// container.setAttributeNode(containerAttribute);
// container.prepend(containerText);
// containerParagraph.textContent = "This's a paragraph";



let body = document.body;
let header = document.createElement("header");
let nav = document.createElement("nav");
let main = document.createElement("main");
let footer = document.createElement("footer");
let mainComment = document.createComment("This's the main comment");
let scrollBtn = document.createElement("button")
let NewProductbtn = document.createElement("button")
let newProduct = document.querySelector(".newProduct");
let globalProductCount = 0;
scrollBtn.setAttribute("class","scrollBtn");
scrollBtn.appendChild(document.createTextNode("Top"));
NewProductbtn.setAttribute("class","NewProductbtn");
NewProductbtn.appendChild(document.createTextNode("Add New Product"));
body.appendChild(mainComment);
body.appendChild(header);
header.appendChild(nav);
body.appendChild(main);
body.appendChild(footer);
header.appendChild(scrollBtn);
newProduct.appendChild(NewProductbtn);
for(let count = 0; count < 7 ; count++){
    // Creating the Main Elements
    let product = document.createElement("div");
    let Title  = document.createElement("h3");
    let Description = document.createElement("p");
    let removeBtn = document.createElement("button");
    let Comment = document.createComment("This's the product comment");
    let TitleText  = document.createTextNode(`Product Title ${count+1}`)
    let DescriptionText = document.createTextNode(`Product Description ${count+1}`);
    let removeBtnText = document.createTextNode("Remove");
    // Setting the Elements Values
    Title.appendChild(TitleText);
    Description.appendChild(DescriptionText);
    product.setAttribute("class","product");
    removeBtn.setAttribute("class","removeBtn");
    removeBtn.appendChild(removeBtnText);
    // Adding the Elements to the page
    product.appendChild(Comment);
    product.appendChild(Title);
    product.appendChild(Description);
    product.appendChild(removeBtn);
    main.appendChild(product)
    globalProductCount += 1;
}
let product = document.querySelector("div");
console.log("====================================================");
console.log(product.children);
console.log(product.childNodes);
console.log(product.firstChild);
console.log(product.lastChild);
console.log(product.firstElementChild);
console.log(product.lastElementChild);
console.log("====================================================");

// Show the button after scrolling down
window.onscroll = function () {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
// Scroll to the top when clicked
scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

NewProductbtn.onclick = function (){
    let newProductTitle = document.getElementById("newProductTitle").value;
    let newProductDescription = document.getElementById("newProductDescription").value;
    let product = document.createElement("div");
    let Title  = document.createElement("h3");
    let Description = document.createElement("p");
    let removeBtn = document.createElement("button");
    let Comment = document.createComment("This's the product comment");
    let TitleText  = document.createTextNode(`${newProductTitle}`)
    let DescriptionText = document.createTextNode(`${newProductDescription}`);
    let removeBtnText = document.createTextNode("Remove");
    Title.appendChild(TitleText);
    Description.appendChild(DescriptionText);
    product.setAttribute("class","product");
    removeBtn.setAttribute("class","removeBtn");
    removeBtn.appendChild(removeBtnText);
    // Adding the Elements to the page
    product.appendChild(Comment);
    product.appendChild(Title);
    product.appendChild(Description);
    product.appendChild(removeBtn);
    removeBtn.onclick = function () {
    this.parentElement.remove();
    globalProductCount--;
    console.log(globalProductCount);
    };
    main.appendChild(product);
    globalProductCount += 1;
    console.log(globalProductCount);
}

document.querySelectorAll(".removeBtn").forEach(btn => {
    btn.onclick = function () {
        this.parentElement.remove();
        globalProductCount -= 1;
        console.log(globalProductCount);
    };
});

console.log(globalProductCount);