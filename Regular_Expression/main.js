// 134 - 135
// let myStr1 = "I love Coding and did some coding today";
// let myStr2 = "my Name is Ali Mohammed Ali";
// let myStr3 = "test";
// let regex1 = /coding/igm;
// let regex2 = /Ali/g;

// console.log(myStr1.match(regex1));
// console.log(myStr2.match(regex2));
// console.log(myStr3.match(regex2));

// 136
// let tld = "net com Info Gov Io";
// let num = "0 1%2^56$@ 72*389**";
// let tldregex = /(io|info|Com)/ig;
// let numregex = /[0-4]/ig;
// let RevNumregex = /[^0-4]/ig;
// let speicalRegex = /[^0-9]/ig;

// console.log(tld.match(tldregex));
// console.log(num.match(numregex));
// console.log(num.match(RevNumregex));
// console.log(num.match(speicalRegex));

// // practice  Find Os(5~8)Os 
// let str = "Os1 Os4Os Os8Os Os9Os Os6Os";
// let strRegex = /Os[5-8]Os/ig;
// console.log(str.match(strRegex));

// 137
// let myString = "AaBbcdefG123!234%^&*";
// let regSmalla_z = /[a-z]/g;
// let regNotSmalla_z = /[^a-z]/g;
// let regCapitalA_Z = /[A-Z]/g;
// let regNotCapitalA_Z = /[^A-Z]/g;

// let regNumbers = /[0-9]/g;
// let regNotNumbers = /[^0-9]/g;
// let regSpeical = /[^a-z0-9]/ig; // !@#$%^&*()_+/*.
// let regNotSpeical = /[a-z0-9]/ig;

// let regStr = /[abc]/ig;
// let regNotStr = /[^abc]/ig;

// console.log(myString);
// console.log(myString.match(regSmalla_z));
// console.log(myString.match(regNotSmalla_z));
// console.log(myString.match(regCapitalA_Z));
// console.log(myString.match(regNotCapitalA_Z));
// console.log("==================")
// console.log(myString.match(regNumbers));
// console.log(myString.match(regNotNumbers));
// console.log(myString.match(regSpeical));
// console.log(myString.match(regNotSpeical));
// console.log("==================")
// console.log(myString.match(regStr));
// console.log(myString.match(regNotStr));


// 138
// let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g;
// let word = /\w/g;
// let emailReg = /\w@\w\.(com|net)/g;
// console.log(email);
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(emailReg));

// 139
// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// // let regex =  /(\w|)spam(\w|)/ig; // all of them
// // let regex =  /\bspam/ig; // start with spam
// let regex =  /(\bspam|spam\b)/ig; // start or end with spam (aspamo not included)

// console.log(names);
// console.log(names.match(regex));
// console.log(regex.test(names)); //true
// console.log(/(\bspam|spam\b)/ig.test(names));   //true
// console.log(regex.test("osama"));   //false
// console.log(regex.test("spam1"));   //ture
// console.log(regex.test("1spam1"));  //false

// 140  - Quantifiers part 1
// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net hr@@s.c it@p osama@mail.ru"; // All Emails
// // let mailsReg = /\w+@\w+\.\w+/ig;
// let mailsReg = /\w+@\w+\.(com|org|net)+/ig;
// console.log(mails);
// console.log(mails.match(mailsReg));
// console.log("===========================");

// let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
// let numsReg = /0\d*0/ig;
// console.log(nums); 
// console.log(nums.match(numsReg)); 
// console.log("==========================="); 

// let urls = "https://google.com Ali https\\:mona http://www.website.net web.com mahmoud"; // http + https
// let urlsReg = /(https?:\/\/)?(www.)?\w+\.\w+/ig ;
// console.log(urls); 
// console.log(urls.match(urlsReg)); 
// console.log("===========================");


// 141
// let serials = "S100S S3000S S50000S S950000S";
// console.log(serials); 
// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

// 142
// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/^\d/ig.test(names));
// console.log(/z$/ig.test(names));

// console.log(names);
// console.log(names.match(/\d\w{5}(?=z)/ig));
// console.log(names.match(/\d\w{8}(?!z)/ig));

// 143
// let txt = "We Love Programming And @ Because @ Is Amazing";
// let reg = /@/ig;
// console.log(txt.replace("@","JavaScript"));
// console.log(txt.replaceAll("@","JavaScript"));
// console.log(txt.replace(reg,"JavaScript"));
// console.log(txt.replaceAll(reg,"JavaScript"));

// 144
// let submit = document.forms[0].onsubmit = () => {
    // let phone = document.getElementById("phone").value;
    // let phoneRegEx = /\(\d{4}\)\s\d{3}-\d{4}/i;
    // let validationResult = phoneRegEx.test(phone); 
    // console.log(validationResult);
    // if(validationResult === false){
        // return false ;
    // }
    // return true ;
// };

// Assignments
// 1 
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let ipReg = /^(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/i;
// console.log(ip);
// console.log(ip.match(ipReg));

// 2
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let Reg = /OS\d*O/ig;
// console.log(specialNames);
// console.log(specialNames.match(Reg));

// 3
// let phone = "+(995)-123 (4567)";
// let reg = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;
// console.log(phone);
// console.log(phone.match(reg));

// 4
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i; 
/*
https?:\/\/     chech for http with or without s and then :\\
(?:[-\w]+\.)?   ?: non-capturing group then check for - and or letters more than once if it exist or not
([-\w]+)        check for - and or letters more than once 
\.\w+           chech for . then letters
(?:\.\w+)?      ?: non-capturing group then check for . then one or more letters
\/?.*           chech for / if it exist once or not then for any character it exist ot not
*/

// 5
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";
// let re = /(\d{1,2}\/\d{1,2}\/\d{1,4}|\d{1,2}\s-\s\d{1,2}\s-\s\d{1,4}|\d{1,2}\s\d{1,2}\s\d{1,4})/g; // Write Pattern Here
// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"

// 146
// Challange

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/)?(\w*\.\w*)(\.\w*)?(:\d+\/.*)?/i;
// // let re = /^(?:https?:\/\/)?(?:www\.)?[\w-]+\.\w+(?::\d+)?(?:\/.*)?$/i;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));