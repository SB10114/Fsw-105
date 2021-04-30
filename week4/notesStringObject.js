/*The JavaScript String object is a global object that is used to store strings. A string is a sequence of letters, numbers, special characters
and arithmetic values or combination of all.

***Examples below***


String Properties
The following table lists the standard properties of the String object.

Property	Description
length	Returns the length of a string.
prototype	Allows you to add new properties and methods to an String object.
Note: Every object in JavaScript has a constructor property that refers to the constructor function that was used to create the instance of that object.

String Methods
The following table lists the standard methods of the String object.

Method	Description
charAt()	Returns the character at the specified index.
charCodeAt()	Returns the Unicode of the character at the specified index.
concat()	Joins two or more strings, and returns a new string.
endsWith()	Checks whether a string ends with a specified substring.
fromCharCode()	Converts Unicode values to characters.
includes()	Checks whether a string contains the specified substring.
indexOf()	Returns the index of the first occurrence of the specified value in a string.
lastIndexOf()	Returns the index of the last occurrence of the specified value in a string.
localeCompare()	Compares two strings in the current locale.
match()	Matches a string against a regular expression, and returns an array of all matches.
repeat()	Returns a new string which contains the specified number of copies of the original string.
replace()	Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the 
original string.
search()	Searches a string against a regular expression, and returns the index of the first match.
slice()	Extracts a portion of a string and returns it as a new string.
split()	Splits a string into an array of substrings.
startsWith()	Checks whether a string begins with a specified substring.
substr()	Extracts the part of a string between the start index and a number of characters after it.
substring()	Extracts the part of a string between the start and end indexes.
toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
toLowerCase()	Converts a string to lowercase letters.
toString()	Returns a string representing the specified object.
toUpperCase()	Converts a string to uppercase letters.
trim()	Removes whitespace from both ends of a string.
valueOf()	Returns the primitive value of a String object.
*/

var str = 'Hi';
var greeting ='Hello';

var str1 = 'Good morning!';
console.log('Strings length: ' + str.length); //returns 2
console.log('String-1 length: ' + str1.length); // returns 13
console.log('----');

var str2 = "Hello!";

//Display the first character
console.log('First chracter in string-2: ' + str2[0]); //returns H
console.log('First chracter in string-1: ' + str1[0]); //returns G
console.log('----');

//Display the last character
console.log('Last chracter in string-1: ' + str1[str1.length - 1]); // returns !
console.log('Last chracter in string: ' + str[str.length - 1]); //returns i
console.log('----');

//concatenate many strings
var firstName = 'John';
var lastName = 'Smith';
var endName = ' IV';
//var strName = firstName + lastName + endName;
console.log('Full name is: ' + firstName + lastName); //returns JohnSmith
//console.log('Full name is: ' + strName); //returns JohnSmith IV

//Alternatively can be written as:
var whiteSpace = ' ';
var strName = firstName;
strName += whiteSpace;  
strName += lastName + whiteSpace;
strName += endName;
console.log('Full Name is: ' + strName); //returns John Smith IV
console.log('----');

//string(n)
//'' + n
//n.toString()

var status = false;
var str3 =  status.toString(); // 'false'
console.log('String-3s value:' + str3);
var back = Boolean(str3); //true
console.log('String-3 converted back:' + back);
console.log('----');

// >, >=, <, <=, ==

var result = 'a' < 'b';
console.log('Result value is:' + result); // true

var result = 'a' < 'B';
console.log('Result new value is:' + result); // false
console.log('----');

//.concat() method
var helloGreeting = 'Hello';
var greetingMessage = helloGreeting.concat(' ', 'John');
console.log('Greeting message is:' + greetingMessage);
console.log('---');

var colors = ['Blue', 'Green', 'Red'];
var colorResults =  ''.concat(...colors);
console.log('Results of Colors:' + colorResults);
console.log('---');


//concatenate non-string arguments
var str4 = '' .concat(1, 2, 3);
console.log('Value of string 4 is:' + str4);
console.log('----');


//.indexOf() method
//syntax: var index = strindexOf(substr, [, fromIndex]);

//get the index of the first occurrance of the substring in the string: finding substring in string
var str5 = 'finding substring in string';
var index = str5.indexOf('str');
console.log('Value of Index is:' + index); //outputs 11
console.log('----');


//to count the number of occurences of the substring 'know' in this string: 'You do not know what you do not know until you know'
var str6 = 'You do not know what you do not know until you know';
var subStr = 'know';
var count = 0;
var index = str6.indexOf(subStr);
while (index !== -1){
    count ++;
    index = str6.indexOf(subStr, index + 1);
}
console.log('Final count: ' + count);
console.log('----');

var str7 = 'JS indexOf';
var subStr = 'js';
//var index = str7.indexOf(subStr);
//perform a case-insensitive search
var index = str7.toLocaleLowerCase().indexOf(subStr.toLocaleLowerCase());
console.log('Value of index this time is: ' + index);
console.log('----');

//.slice() method to extract a stubstring from a string
//var subStr = str.slice(startIndex [,endIndex]);

//get local part of an email address
var email = 'josh@bryanuniversity.edu';
var userName = email.slice(0, email.indexOf('@'));
console.log('User name extracted from the email address is: ' + userName);
console.log('----');


//trim() methods to remove whitespace characters from BOTH ends of a string
// var resultString = str.trim();
var str8 = '   JS trim     ';
var result = str8.trim();
console.log('Value of String-8 after applying TRIM method: ' + result);

//trimStart() removes whitespaces from the beginning of a string
//trimEnd() removes whitespaces from the end of a string

