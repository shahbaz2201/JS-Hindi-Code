const user = {
    username: "shahbaz",
    pricce: 899,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log.this
    }

} 

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shahbaz"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//      let username = "shahbaz"
//      console.log(this.username);
// }

// const chai =  () => {
//     let username = "shahbaz"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2)


const addTwo = (num1, num2) => ({ username: "shahbaz"})

// console.log(addTwo(4, 5))

// const myArray = [2, 5, 3, 9]

// myArray.forEach()





