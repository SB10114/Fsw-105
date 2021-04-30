/*
The JavaScript Array object is a global object that is used in the construction of arrays. An array is a special type of variable that allows you to store 
multiple values in a single variable.


Array Properties

The following table lists the standard properties of the Array object.

Property	Description
length	Sets or returns the number of elements in an array.
prototype	Allows you to add new properties and methods to an Array object.
Note: Every object in JavaScript has a constructor property that refers to the constructor function that was used to create the instance of that object.

Array Methods
The following table lists the standard methods of the Array object.

Method	Description
concat()	Merge two or more arrays, and returns a new array.
copyWithin()	Copies part of an array to another location in the same array and returns it.
entries()	Returns a key/value pair Array Iteration Object.
every()	Checks if every element in an array pass a test in a testing function.
fill()	Fill the elements in an array with a static value.
filter()	Creates a new array with all elements that pass the test in a testing function.
find()	Returns the value of the first element in an array that pass the test in a testing function.
findIndex()	Returns the index of the first element in an array that pass the test in a testing function.
forEach()	Calls a function once for each array element.
from()	Creates an array from an object.
includes()	Determines whether an array includes a certain element.
indexOf()	Search the array for an element and returns its first index.
isArray()	Determines whether the passed value is an array.
join()	Joins all elements of an array into a string.
keys()	Returns a Array Iteration Object, containing the keys of the original array.
lastIndexOf()	Search the array for an element, starting at the end, and returns its last index.
map()	Creates a new array with the results of calling a function for each array element.
pop()	Removes the last element from an array, and returns that element. This method changes the length of the array.
push()	Adds one or more elements to the end of an array, and returns the array's new length.
reduce()	Reduce the values of an array to a single value (from left-to-right).
reduceRight()	Reduce the values of an array to a single value (from right-to-left).
reverse()	Reverses the order of the elements in an array.
shift()	Removes the first element from an array, and returns that element. This method changes the length of the array.
slice()	Selects a part of an array, and returns the new array.
some()	Checks if any of the elements in an array passes the test in a testing function.
sort()	Sorts the elements of an array.
splice()	Adds/Removes elements from an array.
toString()	Converts an array to a string, and returns the result.
unshift()	Adds new elements to the beginning of an array, and returns the array's new length.
values()	Returns a Array Iteration Object, containing the values of the original array.
You don’t have a graded assignment to demonstrate your understanding, but you will apply the following concepts to your Project.

*/

//Array methods
var i = 1;

//syntax for array literals
// var <arreay-name> = [elemt0, element 1, ...., elementN];
var stringArray = ['one', 'two', 'three'];
var numericArray = [1, 2, 3, 4, 5];
var decimalArray = [1.1, 1.2, 1.3];
var booleanArray = [true, false, false, true];
var mixedArray = [1, 'two', 'three', 4];

//syntax of array constructor, uses NEW keyword
//var arrayName = new array();
//var arrayName = new array(Number_Length);
//var arrayName = new array(element1, element2, ...console, elementN);

var stringArray = new Array();
stringArray[0] = 'one';
stringArray[1] = 'two';
stringArray[2] = 'three';

var numericArray = new Array(3);
numericArray[0] = 1;
numericArray[1] = 2;
numericArray[2] = 3;

var mixedArray = new Array(1, 'two', 3, 'four');

/*
var stringArray + new Array();
stringArray['one'] = 'one';
stringArray['two'] = 'two';
stringArray['three'] = 'three';
*/

var stringArray = new Array('one', 'two', 'three');
console.log(stringArray[0]);
console.log(stringArray[1]);
console.log(stringArray[2]);
console.log(stringArray[3]);

console.log('FOR LOOP DISPLAYING ARRAY ITEMS');

for (var i = 0; i < stringArray.length; i++);
{
    console.log(stringArray[i]);
}

//Syntax for forEach loop: array.forEach(callback, thisArg);

var subjects = ['physics', 'chemistry', 'biology', 'aeronautics'];
subjects.forEach(function(indexElement, index, array){
    console.log(indexElement + 'Is stored at index location: ' + index + 'within the array.');
});

//push() adds an element at the last positon
//unshift() adds an element at the beginning position
//splice() adds an element at a specified position

subjects.push('Mathematics');
//subjects.push('electronics', 'computer science', 'statistics', 'history');
subjects.unshift('electronics', 'computer science', 'statistics', 'history');
subjects.forEach(function(fetch){
    console.log('After push() and unshift() : ' + fetch);
});

//pop() deletes an element from the end of an array
//shift() removes an element from the beginning of an array

var subjects = ['physics', 'chemistry', 'biology', 'aeronautics'];

console.log('OP and SHIFT methods');
console.log('Array prior to POP method: ');
subjects.forEach(function(fetch){
    console.log(fetch);
});
console.log('extracted element of an array: ' +subjects.pop());
console.log('First element of an array: ' + subjects.shift());
console.log('Array snapshot after the POP method: ');
subjects.forEach(function(fetch){
    console.log(fetch);
});

//.every(): array.every(callback, thisArg);
var myValues = [150, 400, 450, 375, 200];// if you add a value less than 100 will return false
function checkNum(value){
    return value > 100;//will return true
}
console.log('Result for .every() method: ' + myValues.every(checkNum));
