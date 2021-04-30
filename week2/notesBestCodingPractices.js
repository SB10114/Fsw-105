/*
XXXXX Review JavaScript Coding Best Practices

In JavaScript, having correct syntax means you are obeying the basic rules that allow JavaScript to be interpreted correctly. 
If you mess up and write incorrect syntax, your program will break.

Code conventions are a little different than syntax though. Conventions are like the writing/style guides of programming languages. 
Most languages have a standard convention that all programmers should follow. 
Although your code may not necessarily break if you don't follow convention, your fellow programmers may decide they want to break you because 
you're making their life more difficult...

XXXXX Note: for a quick summary of these (and more) rules of JavaScript code conventions, check out the W3Schools page on Code Conventions. 

XXXXXXXXXXXXXXXXXXXX

The following are some important best practices to follow with the JavaScript language, some of which apply to programming in general.

X camelCase
JavaScript uses a variable and function naming convention called "camelCase". 
This means that anytime you are naming a variable or a function in your code, you separate the "words" of your variable or function name by 
capitalizing the first letter of each new "word."

var thisIsHowYouDoCamelCasing = true;
function hereIsAFunction() {
    ...
}
You will notice also that the first letter of the variable or function is lowercased. 
This is also a convention, although there are instances in JavaScript where it is more common to capitalize this first letter, 
like when using a constructor function. Don't worry about this too much right now, but just for the sake of completeness, here is an example:

function Person(name) {
    this.name = name;
}

Person.prototype.talk = function () {
    console.log("Hello!");
}

X Whitespace
JavaScript ignores whitespace, which means you could write your entire JavaScript program on a single line and it would work just the same as if 
you spaced it out in a more readable way. Since it's nearly impossible to write a program this way, much less read a program like this, 
you should do everything you can to make sure your JavaScript is clearly and logically indented.  
A good practice is to use a 4-space indenting convention, although it is also very common to see a 2-space convention.

// This is legit, with 4-space indents:
if (programmerIsNoob) {
    if (notIndentedWell) {
        console.log("Fix your spacing!");
    }
}

// This is terrible, awful, and not good, but it will technically still work:
var terribleSpacing; terribleSpacing = " "; if (terribleSpacing){ console.log("Oh heck naw"); }
You should put spaces between operations in an expression. So any time you have a +, -, *, /, %, =, ===, etc. you should put spaces on either side:

// Good:
var prettySum = 4 + 3 / (5 - 1);

// Not as good:
var uglySum=4+3/(5-1);
You should put each property of an object on its own line, and indented:

var person = {
   name: "Bob",
   age: 21
}
Right from the beginning you should be thinking about writing your programs for other developers (and your future self) to read. 
Although you may take notes in poor handwriting, it's no fun if you can barely read it later on when you need it!

X Semicolons
Semicolons can be confusing in JavaScript. The problem is worsened by the fact that JavaScript interpreters do a pretty good job of running 
correctly even if there are missing semicolons.

The basic rule is that you should use them after every simple statements:

var values = ["Volvo", "Saab", "Fiat"];

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
You won't put semicolons after the closing braces (}) of conditional (if-else) statements, for loops, or function declarations, 
but you will still put them at the end of every simple statement therein:

if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}  // No semicolon

for (i = 0; i < 5; i++) {
    x += i;
}  // No semicolon

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}  // No semicolon

X Braces
If there's a hotly disputed topic in programming, this might be it: put the opening curly brace ({) on its own line, or no?

The correct answer in JavaScript is no. Put it at the end of the line before opening the body of the block you are writing:

// Good:
if (condition) {
    doThing();
} else {
    doAnotherThing();
}

// Bad:
if (condition)
{
    doThing();
}
else
{
    doAnotherThing();
}

X Naming
Sure, you may feel like you're in a hurry to finish up the program you are working on, and it's way easier to just call that variable b. 
You know, short for books.

Don't do it! Just spend the extra time to make the extra keystrokes it takes to type out books! 
First of all - you likely won't be saving much time when you introduce a new variable b2 which is short for blankets or something, 
and then you have to spend a whole lot of extra mental capacity remembering which one is b and which one is b2. 
And all those bugs that will ensue... it's simply not worth it. Second of all - most text editors you'll be using will have code completion built-in. 
So you won't even need to type out the whole word every time anyway. You start typing it, it suggests all the names you might be meaning to type, 
and you hit enter on the right one.

Along those lines, we had also recommend not shortening variables by removing a bunch of letters in the middle, vowels, etc. 
Use the variable name person, not prsn. For all you know, someone later might think it's short for prison or something equally confusing.

// Good:
var person = {
    name: "Joe Hero",
    email: "jhero@example.com"
}

// Not as good:
var prsn = {
    n: "Joe Schmoe",
    e: "ihrtabbrv8ing@silly.com"
}
Names are for the sake of those reading your code, which includes you!

When choosing a name, consider the following:

What data type is this variable?

Number - name it based on the value it represents (e.g: var age = 10;).

String - same as above (e.g: var location = "Salt Lake City";).

Boolean - asks a yes/no question (e.g: var isTheRealSlimShady = true;).

Function - verb or action word/phrase describing its job (e.g: var capitalize = function(str){ return str.toUppercase()};).

Array - Plural word describing its contents (e.g: var instruments = ["guitar", "drums", "bass", "keyboard"];).

Object - Singular word describing what it represents (e.g: var animal = {type: "cow"}).

X Comments
There are line comments (as you have seen in all the examples above, beginning with //), and there are block comments:

/*Everything in here is a comment, 
even if it goes on multiple lines*/ /*


You should mostly only be using block comments as explanatory documentation for particularly complex files or functions. 
Usually you will want to stick to single line comments for most of what you do. 
If your function is so complex that it requires a block comment, you should probably consider splitting it into multiple functions or 
writing it more concisely.

You should strive to write "self-documenting code." If you follow the naming conventions outlined above, you'll be well on your way to writing 
code that is easy enough to read on its own that you don't need to load it up with explanations on why you're doing something a certain way.

Line comments are most helpful when you had to solve a problem in a less-than-obvious way because of the limitations you're facing. 
In other words, when another programmer might look at your code and say "why did they do it this way? I'm going to change it back...", 
you may want to add a comment saying in effect "hey buddy - this is the reason I had to do it this less-than-obvious way. 
If you change it back you'll likely come to the same conclusion I did and have to backtrack to writing it this way again."

X Conclusion
Writing your code within the guidelines of convention may seem odd at first, but once you have been programming for a while you will quickly 
understand the benefits of adhering to convention. 
You should begin adopting these practices now into your code, and keep in mind that employers might be looking at your code when determining 
if you had be a good fit for their team. If you give them a reason to think they will need to educate you on following basic conventions, 
that may be a reason they choose someone else over you.
*/