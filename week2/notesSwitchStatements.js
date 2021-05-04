/*Per this syntax the switch statement contains an expression or a literal value
*Will return a literal value when evaluated
*Can include multiple cases where each case represents a particular value
*Duplicate case values are not allowed, they must all be unique
*If the expression that is passed to a switch statement doesn't match any of the values then the 
    statement under the default will be executed ("statementDefault")
*Break statements are used inside the switch to terminate a statements sequence. **break statements 
    are optional and if excluded the case label will continue on unhindered. If the break statement is 
    present it will terminate all other case label execution and take you out of the switch statement alltogether.
*often used to replace a complicated if else statment 

switch (expression) // will return a value when evaluated
{
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    //...
    //...
    case valueN:
        statementN;
        break;
    default:
        statementDefault;
}
*/

var i = 9;
switch(i)
{
    case 0:
        console.log('value of i is zero');
        break;
    case 1:
        console.log('value of i is one');
        break;
    case 2:
        console.log('value of i is two');
        break;
    default:
        console.log('value of i is greater than two');
}

//Outputs Tuesday, because variable is defined as 3.
var day = 3;
var dayName;
switch (day){
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6 : 
        dayName = 'Friday';
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Inalid day!';
}
console.log(dayName);

//Condition to check weather a year is a leao year or not
//1. year is evenly divisible by 400 -- OR --
//2. year is evenly divisible by 4 and not evenly divisible by 100


var year = 2016;
var month = 2;
var dayCount;

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if ( ((year % 4 == 0) && !(year % 100 == 0)) || (year % 4 == 0) )
            dayCount = 29;
        else 
            dayCount = 28;
            break;
        default:
            dayCount = -1 //invalid month
}
console.log(dayCount);


