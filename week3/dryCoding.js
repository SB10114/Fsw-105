//#1
function add(num1, num2){
    return num1 + num2;
}

console.log("Sum of two numbers: " + add(1000, 56));
console.log("------")

//#2
function square(a, b, c){
    return Math.max(a, b, c);
}
console.log("Max of three numbers: " + Math.max(2, 6, 8));
console.log("------");

//#3
var myNumber = 5;
function oddOrEven(numToCheck){   
    if (numToCheck % 2 === 1) {
        return "odd";
    }else{
        return "even";
    }
}
   
console.log("Number (" + myNumber + ") is " + oddOrEven(myNumber) + ".");
console.log("--------");

//#4
function thing(string){
    var strLength = string.length;
    //  console.log(length, "length")
    if (strLength <= 20){
        return string + string;
    } 
    else {
        //  console.log(string); console.log(length/2)
        return string.slice(0, strLength/2);
    }
}
console.log(thing("How Are You?"));
console.log(thing("I walked along the beach today with the dog"));