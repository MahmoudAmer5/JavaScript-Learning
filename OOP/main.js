// 147 - 148
// function Account(userName, password, id, age, salary){
//     this.userName = userName;
//     this.password = password;
//     this.id = id;
//     this.age = age;
//     this.salary = salary+3000; // Apply For every object created and will be created from this constractor
// };
// let mahmoud = new Account("Mahmoud", 123456, 1000, 25, 25000);
// let ali = new Account("ali", 1234, 1001, 39, 29000);
// let mona = new Account("mona", 123456789, 1002, 19, 22000);
// console.log(mahmoud.userName);
// console.log(mahmoud.password);
// console.log(ali.id);
// console.log(mona.age);
// console.log(mona.salary);

// 149
// class Account{
//     constructor(userName, password, id, age, salary){
//         this.userName = userName;
//         this.password = password;
//         this.id = id;
//         this.age = age;
//         this.salary = salary;    
//     }
// };
// console.log(Account);

// 150
// class Car{
//     constructor(carName, Type, Color, maxSpeed, isNew){
//         // Proparties
//         this.carName = carName || "Unknown";
//         this.Type = Type || "Unkown";
//         this.Color = Color || "No Color";
//         this.maxSpeed = maxSpeed || 0;
//         this.isNew = isNew || false;    
//         this.Data = function(){
//             return `
//             =======================================================
//             Car Name : ${this.carName}
//             Car Type : ${this.Type}
//             Car Color : ${this.Color}
//             this.maxSpeed : ${this.maxSpeed}
//             this.isNew : The car is ${this.isNew ? "New":"Old"} 
//             =======================================================
//             `;
//         }
//     }
//     // Methods
//     getCarData(){
//         return `
//             =======================================================
//             Car Name : ${this.carName}
//             Car Type : ${this.Type}
//             Car Color : ${this.Color}
//             this.maxSpeed : ${this.maxSpeed}
//             this.isNew : The car is ${this.isNew ? "New":"Old"} 
//             =======================================================
//             `;
//     }
// };
// 
// let Honda = new Car("Honda","Civic","Blue","210",false);
// let test1 = new Car();
// let test2 = new Car("TOYOTA", undefined, "Blue");
// let Porche = new Car("Porche",925,"black","540",true);
// 
// console.log(Honda.Data());
// console.log(Honda.Data);
// console.log(test1.Data());
// console.log(test2.Data());
// console.log(Porche.Data());
// console.log("*************************************************************************************");
// console.log(Porche);
// console.log(Porche.getCarData);
// console.log(Porche.getCarData());

// 151
// class User{
//     constructor(userName, password, email){
//         this.userName = userName;   
//         this.password = password;
//         this.email = email;
//     }
//     updateEmail(newEmail){
//         this.email = newEmail;
//     }
// }
// const user1 = new User("Mahmoud", 123456, "mahmoud@example.com");
// console.log(user1.email);
// user1.updateEmail("mahmoud.updated@example.com");
// console.log(user1.email);
// console.log(user1 instanceof User);

// 152
// class User{
//     count = 800 ; // related to the instances
//     static id = 1000 ; // Related to the Class
//     static numberOfUser = 0;
//     constructor(userName, password, email, age, ){
//         this.userName = userName;   
//         this.password = password;
//         this.email = email;
//         this.id = User.increaseId() ;
//     }
//     updateEmail(newEmail){
//         this.email = newEmail;
//     }
//     static increaseId(){
//         const newId = this.id + this.numberOfUser;
//         this.numberOfUser += 1;
//         return newId;
//     }
// }
// let user1 = new User("Mahmoud", 123456, "mahmoud@example.com");
// let user2 = new User("ali", 1234, "ali@example.com");
// let user3 = new User("ali2", 1234, "ali@example.com");
// let user4 = new User("ali3", 1234, "ali@example.com");
// let user5 = new User("ali4", 1234, "ali@example.com");
// console.log(user1.count)
// console.log(User.count)
// console.log(user1.numberOfUser)
// console.log(User.numberOfUser)
// console.log(user1.id)
// console.log(user2.id)
// console.log(user5.id)
// console.log(User.numberOfUser)

// 153
// Parnet class
// class Account{
//     constructor(userName, password, id){
//         this.userName = userName;
//         this.password = password;
//         this.id = id;
//     }
//     updateUserName(name){
//         return this.userName = name;
//     }
//     getAccountData(){
//         return `
//             =======================================================
//             Name : ${this.userName}
//             password : ${this.password}
//             id : ${this.id}
//             =======================================================
//             `;
//     }
// }
// // Derived class
// class AdminAccount extends Account {
//     constructor(userName, password, id){
//         super(userName, password, id);
//         this.AdminPermissions = true ;
//         }
// }

// class manager extends AdminAccount {
//     constructor(userName,password,id,AdminPermissions){
//         super(userName,password,id,AdminPermissions)
//         this.hire = hire ;
//     }
// }
// let admin1 = new AdminAccount("mahmoud",1234,55);
// let manager1 = new AdminAccount("ali",1234,55,true);
// console.log(admin1.password)
// console.log(admin1.AdminPermissions)
// console.log(admin1.getAccountData())
// console.log(manager1.password)
// console.log(manager1.AdminPermissions)
// console.log(manager1.getAccountData())

// 154 - 155 - 156
// class User{
//     #id
//     constructor(username,password,id){
//         this.username = username;
//         this.password = password;
//         this.id = id;
//     }
//     #run(){
//         return"value";
//     }
// }
// class Admin extends User{
//     constructor(username,password,id){
//         super((username,password,id));
//     }
// }
// let ad = new Admin("mah", 15,2);
// console.log(ad.id)
// console.log("===============================================")
// console.log(ad)
// console.log(User.prototype)
// console.log(Admin.prototype)
// console.log(String.prototype)
// console.log("===============================================")
// let str = "Flowers" ;
// console.log(str);
// User.prototype.sayhello = function(){
//     return `hello ${this.username}`;
// }
// console.log(User.prototype)
// String.prototype.greet = function(){
//     return `Hello ${this}`;
// }
// console.log(str.greet());

// 157 - 158
// let user = {    
//     name : "mahmoud",
//     age : 25
// }
// // can be used to add or edit an object
// Object.defineProperty(user,"id",{
//     writable : false,       // can be changed ?
//     enumerable : false,      // can be part of loops ?
//     configurable: false,     // can delete or redefine the proparty ?
//     value : 1001
// });
// console.log(user);
// user.id = 0 ;
// console.log(user.id);
// for(let prp in user){
//     console.log(`${prp} : ${user[prp]}`);
// }
// console.log(delete user.id);
// console.log(user.id);
// console.log("=======================================");
// console.log(Object.getOwnPropertyDescriptors(user));

// *************************************************************************************************
// Assignments 
// 1
// class Car {
//     constructor(name, model, price){
//         this.n = name;
//         this.m = model;
//         this.p = price;
//     }
//     run(){
//         return "Car Is Running Now";
//     }
//     stop(){
//         return "Car Is Stopped" ; 
//     }
// }
// let car1 = new Car("925", "Porche", 1520000);
// let car2 = new Car("A7", "TOYOTA", 485000);
// let car3 = new Car("K", "Suzuki", 350000);

// console.log(car1.n);
// console.log(car1.m);
// console.log(car1.p);
// console.log(car1.run());

// 2
// class Phone {
//     constructor(name, serial, price) {
//         this.name = name;
//         this.serial = serial;
//         this.price = price;
//     }
// }
// // Write Tablet Class Here
// class Tablet extends Phone {
//     constructor(name,serial,price,size){
//         super(name,serial,price);
//         this.size = size || "Unkown";
//     }
//     fullDetails(){
//         return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
//     }
// }
// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);
// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9
// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5
// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown

// 3
// Edit The Class
// class User {
//     #c;
//     constructor(username, card) {
//         this.u = username;
//         this.#c = card;
//         this.showData = `Hello ${this.u} Your Credit Card Number Is ${String(card).match(/(\d{4}|\w{4})/ig).join("-")}`;
//     }
// }
// // Do Not Edit Anything Below
// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);
// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
// console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined

// 4
// // Write Your Code Here
// String.prototype.addLove = function(){
//     return `I Love ${this} Web School`;
// }
// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School

// 5
// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
// };
// // Write Your Code Here
// Object.defineProperties(myObj,{
//     score : {
//         writable : false
//     },
//     id : {
//         enumerable : false
//     }
// })
// delete myObj.country;
// myObj.score = 500;
// for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
// }
// console.log(myObj);








