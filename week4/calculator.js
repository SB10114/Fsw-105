const readline= require("readline-sync") //required to run readline-sync

//Example to run readline-sync
// var triple= readline.question("What is your name?")
// console.log(triple)

var triple= readline.questionInt("Please enter your first number")
console.log(typeof triple)

var again= Number(readline.question("Please enter your second number"))
console.log(typeof again)


function add(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(triple, again))

function multiply(num1, num2){
    var result = num2 * num1;
    return result;
}
console.log(multiply(triple, again))

function divide(num1, num2){
    var result = num2 / num1;
    return result;
}
console.log(divide(triple, again))

function subtract(num1, num2){
    var result = num2 - num1;
    return result;
}
console.log(subtract(triple, again))


var operation= readline.question("Please enter your math")
console.log(operation)
function main(triple, again, operation){
if (operation === "mult" || operation === "multiply" || operation === "multiplication"){
    console.log("The result is: " + multiply(triple, again))
} else if 
    (operation === "div" || operation === "divide" || operation === "division"){
        console.log("The result is: " + divide(triple, again))
} else if 
(operation === "add" || operation === "plus" || operation === "additon"){
    console.log("The result is: " + add(triple, again))
} else if
    (operation === "sub" || operation === "subtract" || operation === "subtraction"){
    console.log("The result is: " + subtract(triple, again)) 
    }   
}
main(triple, again, operation);


