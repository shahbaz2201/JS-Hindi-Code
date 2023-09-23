// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Shahbaz",
    "full name": "Shahbaz Hashmi",
    [mySym]: "mykey1",
    age: 18,
    location:"jaipur",
    email: "shahbaz@google.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "Shahbaz@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Shahbaz@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





