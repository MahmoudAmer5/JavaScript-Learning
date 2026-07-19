    // E-Commerce Store Simulator
    let products = [{
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 15000,
        stock: 5
    },{
        id: 2,
        name: "Mouse",
        category: "Electronics",
        price: 150,
        stock: 25
    }];
    function productData(i){
            console.log(`ID : ${products[i].id}`);
            console.log(`${products[i].name}`);
            console.log(`${products[i].price} EGP`);
            console.log(`Stock: ${products[i].stock}`);
            console.log(`------------`);
    }
    function showAllProducts(){
        for(let i = 0; i < products.length; i++){
            productData(i);
        }
    }
    function searchProdcut(){
        let search = document.getElementById("search").value ;
        if (search === ""){
            return;
        }
        for(let i = 0; i < products.length; i++){
            if(search === products[i].name){
                productData(i)
                break;
            }
            else if(i == products.length - 1){
                console.log("the Product does not exist");
            }
        }
    }
    function clearConsole(){
        console.clear();    
    }


    // showAllProducts();




























