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