//Preliminaries
var t = 5;
if (t > 3){
    console.log("5 is greater than 3")
};

var myString = 'cat';
console.log(myString.length);

var dog = 0;
var cat = 1;
if (dog == cat){
    console.log("I am dog")
 } 
 else {
        console.log("not the same")
    }
console.log(`-------`)
//Bronze

var person = { 
    name: "Bobby",
    age: 12,
}
var age = 12;
 if (age >= 18) {
     console.log(`${person.name} is allowed to go to the movie`)
 } else {
     console.log(`${person.name} maybe next time!`)
}
if (person.name.charAt(0) == "B"){
    console.log("allow into movie");
} else {
    (person.name.charAt(0) == "B" && age >= 18)
    console.log("not allowed into the movie");
}
console.log(`--------`)

////Silver Medal Requirement #1
//var i = "1";
if ("1" == 1) {
    console.log("loosely equals");
} 
else if ("1" === 1){
    console.log("strictly equals");
}
else
    console.log("not equal at all");

//#2
if (1 <= 2 && 2 == 4) {
    console.log("yes")
}
else{
    console.log("no")
}
console.log(`-----`)

//Gold Medal Requirement
//#1
var dog = 0;
var cat = 1;
var species = (dog >= cat) ? "bark" : "meow";
console.log(species); 

var age = 12;
var rating = (age >= 18) ? "R" : "PG-13"
console.log(rating);

var statement = (1 <= 2 && 2 == 4) ? "yes" : "no"
console.log(statement);

console.log(`-----`)
//#2
var pet = "dog";
if (typeof pet == "string") {
console.log("dog")
}
console.log("-----")
//#3
var pet = "true";
if (typeof pet == "boolean"){
    console.log("true")
} else {
    console.log("false")
}
console.log('------')
//#4
var wrigley = "defined";
if (typeof wrigley && "defined"){
    console.log("yes")
} else {
    console.log("no")
}
console.log("-----")
//#5
var s = 20;
if (s > 12){
    console.log('true')
}
console.log('-----')
//#6
var p = 10;
var a = 100
if (p < 100 && a >= p) {
    console.log('math')
}
console.log('------')
//#7
var myNum = 15;
if ((myNum % 2) == (1)){
    console.log('odd')
} else if ((myNum % 2) == (0)) {
    console.log('even')
}

var myNum = 20;
var remainder = myNum %2;
if ((remainder) == (1)){
    console.log('odd')
} else if ((remainder) == (0)) {
    console.log('even')
}