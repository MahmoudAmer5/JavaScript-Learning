//creating the elements
let body = document.body;
let header = document.createElement("header");
let headerLogo = document.createElement("div");
let headerLogoPragraph = document.createElement("p");
let headerMenu = document.createElement("div");

let main = document.createElement("main");

let footer = document.createElement("footer");
let footerPragraph = document.createElement("p");

//setting up the header
header.className = "WebSiteHeader";
headerLogo.className = "WebSiteLogo"
headerMenu.className = "WebSiteMenu"
headerMenu.appendChild(document.createElement("ul"));
header.appendChild(headerLogo);
header.appendChild(headerMenu);
body.prepend(header);
headerLogoPragraph.textContent = `Elzero`;
headerLogo.appendChild(headerLogoPragraph);
let ul = document.querySelector("ul");
ul.appendChild(document.createElement("li"));
ul.appendChild(document.createElement("li"));
ul.appendChild(document.createElement("li"));
ul.appendChild(document.createElement("li"));
let li = document.querySelectorAll("li");
li[0].textContent = `Home`;
li[1].textContent = `About`;
li[2].textContent = `Service`;
li[3].textContent = `Contact`;

//setting up the main
for(let i = 0; i < 15 ;i++){
    let product = document.createElement("div");
    let productSpan = document.createElement("span");
    let productHeader = document.createElement("h1");
    product.appendChild(productHeader);
    product.appendChild(productSpan);
    product.className = `product`;
    productHeader.className = `productHeader`;
    productSpan.className = `productSpan`;
    productHeader.textContent = `${i + 1}`;
    productSpan.textContent = `Product`;
    main.appendChild(product);
}
body.firstChild.after(main);

//settingup the footer
footer.className = "WebSiteFooter";
footerPragraph.className = "WebSitefooterPragraph"
footerPragraph.textContent = `Copyright 2026`;
footer.appendChild(footerPragraph);
body.lastChild.before(footer);

// body styling
body.style = `
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;`;

// header styling
header.style = "height: 60px;position: relative;display:flex; background-Color: #ffffff";
headerLogo.style = "position: absolute; top : -10px;left : 10px;";
headerLogoPragraph.style = "font-size: 30px;color: #23a96e;font-family: arial;font-weight: bold;";
ul.style = "list-style : none ;display : flex ;gap : 10px ;position: absolute; top : 10px;right : 10px;";
for(let i = 0; i < 4;i++){
    li[i].style = "color: #cccccc;"}

// main styling
    // product.className = `product`;
    // productHeader.className = `productHeader`;
    // productSpan.className = `productSpan`;
main.style = `
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding: 15px;
    background-color: #eee;
`;
document.querySelectorAll(".product").forEach(product => {
    product.style = `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 6px;
        height: 100px;
    `;
});
document.querySelectorAll(".productHeader").forEach(header => {
    header.style = `
        margin: 0;
        font-size: 24px;
    `;
});
document.querySelectorAll(".productSpan").forEach(span => {
    span.style = `
        color: #888;
    `;
});

// footer styling
footer.style = `
    display: flex;
    background-color : #23a96e;
    justify-content: center ;
    align-items : center; 
    height: 60px ;
    bottom: 0px;
    left: 0px ;
    width: 100%;` ; 
footerPragraph.style = `
    font-size: 15px ;
    color : #ffffff;`;
