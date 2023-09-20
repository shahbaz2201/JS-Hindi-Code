// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scorevalue = 100.3
const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bidNumber = 35645655556665n
    
    
//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["Salmankhan", "Maheshbabu", "vijaysethupati"]
let myObj = {
    name: "Shahbaz",
    age:22,

}

const myfunction = function(){
    console.log("Hello world");


}

console.log(typeof outsideTemp);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myCountryname = "India"

let anothername = myCountryname
anothername = "Hindustan"

console.log(myCountryname);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shahbaz@google.com"

console.log(userOne.email);
console.log(userTwo.email);



