function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("H");
    console.log("B");
    console.log("A");
    console.log("Z");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

    
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    // console.log(number1+number2);

    return number1 + number2
}

const result = addTwoNumbers(3, 8)

// console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("shahbaz"))
// console.log(loginUserMessage("shahbaz"))

function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 500, 2000))

const user = {
    username: "shahbaz",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 500, 700]

function returnSecondValue(getArray){
    return getArray[3]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 7000]));