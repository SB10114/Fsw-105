function upperAndLower(string){
    // console.log(string)
    console.log(string.toUpperCase() + string.toLowerCase())
}
upperAndLower("hello world");
console.log("-----");

function halfTheLength(string){
    console.log(Math.floor(string.length/2))
    return (Math.floor(string.length/2))
}
halfTheLength("half");
console.log("-----");


function thisIsIt(string){
var halfIndex = halfTheLength(string);
// console.log(halfIndex);
return string.slice(0, halfIndex);
}
console.log(thisIsIt("apple bannana peaches"));
console.log("----");

function hereWeGoAgain(string){
    var halfIndex = halfTheLength(string);
    // console.log(halfIndex);
    return string.slice(halfIndex);
    }
    console.log(hereWeGoAgain("apple bannana peaches"));
    console.log("----");
function numbaFour(string){
    var firstHalf= thisIsIt(string);
    var secondHalf= hereWeGoAgain(string);
    console.log(firstHalf.toUpperCase() + secondHalf.toLowerCase());
}
numbaFour("purple");
console.log("----");

function upperAndLower(string){
    // console.log(string)
    var stringArr = string.split(" ");
     console.log(stringArr);
    var newString = "";
    for (var i = 0; i < stringArr.length; i++){
        // console.log(stringArr[i][0].toUpperCase() + stringArr[i].slice("1").toLowerCase())
        newString += (stringArr[i][0].toUpperCase() + stringArr[i].slice("1").toLowerCase() + " ");
        // console.log(newString, "newString");
    //     // console.log(string[i]);
    //     if (string[i] === " "){
    //         console.log(string[i], "space");
    //     console.log(string.slice(0,i))
    //     console.log(string.slice(i))
    //     }
    } return newString;
}
// upperAndLower("apple bannana peaches");
console.log(upperAndLower("apple bannana peaches pears"));
