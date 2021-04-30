/* SYNTAX
//Reads from top to bottom evaluating the conditions set forth.

if (condition1){ 
    //statements to execute if condition1 is true (console.log)
    
    if (coondition2)
    {
        //executes when condition2 is true (console.log)
    }
}
else 
{
    // executes this block if the conditional expression evaluates to false (console.log)
}
*/

var i = 20;

if (i > 15) { //Without curly braces line 19 will be ignored
console.log('20 is more than 15');
} else {
//This statement will be executed
//as if considers a statement by default in the absence of curly braces
console.log('I am not part of IF statement!');
console.log('I am part of ELSE statment!');
}
console.log('----');

var p = 10;

if (p == 10) {
    //first if statement
    if (p < 15){
        console.log('Value of p is smaller than 15');
    }
    //nested if statement 
    //will only be executed if the above statement evaluates to true.
    if (p < 12) {
        console.log('Value of p is smaller than 12');
    } else {
        console.log('value of p is greater than 15');
    }
}
console.log('----');

var r = 25;
 
if (r == 10){
    console.log('value of r is 10');
} else if (r == 15){
    console.log('value of r is 15');
} else if (r == 20){
    console.log('value of r is 20');
} else {
    console.log('value of r is not present');
}
console.log('----');

/* Ternary Syntax
conditional expression ? expression1 : expression2
*/

var mySal = 1200;
var yourSal = 1000;

mySal > yourSal ? $Result =  'My salary is greater than your salary' : $Result = 'My salary is less than or equal to your salary';
console.log($Result);