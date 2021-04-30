/*SYNTAX
function functionName(parameters){
    //function body
}

EXAMPLES:

function say(){
    //lines of code
}

function square(a){
    //lines of code
}

function add(a, b){
    //lines of code
}

function say(message){
    //lines of code
}

function say(message){
console.log(message);
}
*/


//functionName(arguments);

var result = say('hello');
console.log('result is:' + result);

// return expression;
console.log('---');

function add(a, b){
    //lines of code
    return a + b;
}
console.log('----');

var sum = add(10, 25);
console.log('Sum is:' + sum);
console.log('----');


function compare(a, b){
    if (a > b){
        return -1;
    }
    else if (a < b){
        return 1;
    }
    return 0;
}
console.log(compare(10, 25));
console.log('---');


function say(message){
    //show nothing if the message is empty
    if (! message){
        return;
    }
    console.log(message);
}
say('Hello world');
console.log('---');


//arguments[0] input number to determine which argument above is returned

function add(){
    var sum = 0;
    for (var i = 0; i< arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(add(1, 2, 3, 4, 5));
console.log('---');

var showMessage = function(){
    console.log('hello world!');
};
showMessage();
console.log('----');


var sayHello = function (firstName){
    console.log('hello, ' + firstName);
}
sayHello('Bill');
console.log('----');

function showMe(firstName){
    function sayHello(){
        console.log('Hello ' + firstName + ', How are you?');
    }
    return sayHello();
}
showMe('Steve');
