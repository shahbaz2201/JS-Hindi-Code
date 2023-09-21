const name = "Shahbaz"
const repoCount = 30

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shahbaz')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "    shahbaz    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://shahbaz.com/shahbaz%20hashmi"

console.log(url.replace('%20', '-'))

console.log(url.includes('Aman'))

console.log(gameName.split('-'));



