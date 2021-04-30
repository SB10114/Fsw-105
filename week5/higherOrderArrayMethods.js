//#1 Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
//method .filter()
function fiveAndGreaterOnly(arr)
{
	// your code here
	const result = arr.filter(function(num){
		if (num >= 5){
			return true;
		}
	});
	return result;
} // close function

console.log("--- Array Filter #1 ---");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));  // Output: [6, 8]

//#2 Given an array of numbers, return a new array that only includes the even numbers.
//method .filter()
function evensOnly(arr)
{
	// your code here
	const result = arr.filter(function(num){
		if (num % 2 == 0){
			return true;
		}
	});
	return result;
} // end function

console.log("--- Array Filter #2 ---");
console.log(evensOnly([3, 6, 8, 2, -99, -1200]));  // Output: [6, 8, 2]

//EXTRA CREDIT Make a filtered list of all the people who are old enough to see The Matrix (17+).
var people = [{name: "Angelina Jolie", age: 80}, { name: "Eric Jones", age: 2}, { name: "Paris Hilton", age: 5}, { name: "Kayne West", age: 16},{ name: "Bob Ziroll", age: 100}];
function ofAge(arr) {
    return arr.filter(function(suitability){
        if (suitability.age >= 17) {
            return suitability.name;
        }
    })
}
console.log("--- Extra Credit for .filter() Method ---");
console.log(ofAge(people));
//Output: 
//[ { name: "Angelina Jolie", age: 80 },
//    { name: "Bob Ziroll", age: 100 } ]

//SECTION B
//#1 .map() method
//Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
	const result = arr.map(function(num){
		return num * 2;
	});
	return result;
} // close function

console.log("---  Array Map #1 ---");
console.log(doubleNumbers([2, 5, 100, -50]));  // Output: [4, 10, 200]

//#2 .map() method
//Take an array of numbers and make them strings.
var num = [2, 5, 100];
var newArray = ['2', '5', '100'];
function stringItUp(arr){
    const pet = arr.map(function(num){
		return num.toString();
	});
        return pet;
};
console.log("---  Array Map #2 ---");
console.log(stringItUp(num));  // Output: ["2", "5", "100"]

//#3 Capitalize first letter for each name within the array of names 
//.map() method
var str1 = ["john", "JACOB", "jinGleHeimer", "schmidt"];
function capitalizeNames(arr){
    const pet = arr.map(function(str1){ 
		var day = str1.charAt(0).toUpperCase() + str1.slice(1).toLowerCase();
        return  day;
    }); 
		return pet;
};
console.log("---  Array Map #3 ---"); 
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//SECTION C
//.reduce() method
//Turn an array of numbers into a total of all the numbers
function total(arr)
{
	//your code here 
	const result = arr.reduce(function(num, addedValue){
		addedValue = addedValue + num; // 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6
		return addedValue;
	});
	return result;
};

console.log("---  Array Reduce #1 ---");
console.log(total([1, 2, 3]));  // Output: 6

//#2
//Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    const result = arr.reduce(function(total, num){
		return total += num.toString(); 
	});
    	return result;
};

console.log("---  Array Reduce #2 ---")
console.log(stringConcat([1, 2, 3]));   // Output: "123"

//#3
//Turn an array of voter objects into a count of how many people voted.  
//Note: You don't necessarily have to use reduce for this, so try to think of 
//multiple ways you could solve this. 
function totalVoters(arr){
    const result = arr.reduce(function(total, voters){
		if (voters.voted){ 
		return total += 1;
		} 
		return total;
	},0);
    	return result;
};

var voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary' , age: 31, voted: false},
    {name: 'Becky' , age: 43, voted: false},
    {name: 'Joey' , age: 41, voted: true},
    {name: 'Jeff' , age: 30, voted: true},
    {name: 'Zack' , age: 19, voted: false},
];

console.log("---  Array Reduce #3 ---")
console.log(totalVoters(voters));  // Output: 7

//SECTION D
//.sort() method
// Sort an array from smallest number to largest
function leastToGreatest(arr) {
	const result = arr.sort(function(a, b){
		//a - b is for least to highest (ascending order) type sort
		return a - b;
	});
	return result;
}

console.log("---  Array Sort #1 ---");
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));  //Output: [1, 2, 3, 5, 20, 90]

//#2
//.sort() method
// Sort an array from largest number to smallest
function greatestToLeast(arr) {
	const result = arr.sort(function(a, b){
		//b - a is for highest to least (descending order) type sort
		return b - a;
	});
	return result;
}

console.log("---  Array Sort #2 ---");
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));  //Output: [1, 2, 3, 5, 20, 90]

//#3
//Sort an array from shortest string to longest. 
function lengthSort(arr) {
    const result = arr.sort(function(a, b){
		return a.length - b.length;
		return 0;
	});
		return result;
};

console.log("---  Array Sort #3 ---")
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));  
// Output: ["by", "dog", "wolf", "eaten", "family"]
