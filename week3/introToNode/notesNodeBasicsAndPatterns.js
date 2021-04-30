/* Node Modules Basics
node-js-banner-770x289.jpg

One of the main requirements of having JavaScript be able to work on a server is to have code that can be more easily organized. 
Thus far in JavaScript, we are used to having each JavaScript file be completely on its own, where it can't rely on any code written in any
 other JavaScript file.

The way Node.js deals with allowing for code separation is through modularization, or creating separated modules.

Note: the specific syntax for how this is done in JavaScript is about to change in ES2015 (A.K.A. ECMAScript 6), but the principles will be very 
similar. Also, because adoption of language updates is so slow, you will see this method of modularization for quite a while longer.

require()
Node.js follows the CommonJS module system, and the built in require() function is the easiest way to include modules that exist in separate files. 
The basic functionality of require() is that it reads a JavaScript file, executes the file, and then proceeds to return the exports object.

For example, in the JavaScript Calculator exercise that you will be working on next week, you will have to install the readline-sync package 
using NPM and use the require() method to pull the awesomeness from the module into your own code. That will look something like this:

var readline = require("readline-sync");
var name = readline.question("Please type your name: ");
By simply require-ing the readline-sync module, we are able to use all the goodness it has built in!

So we have already seen how to require() other people's modules, let's see how to create and require() our very own modules next.

Creating a module
The most important thing to understand when it comes to creating your own modules is module.exports.

module is a global Node.js object that contains properties with some information about any given JavaScript file. It has properties like __dirname, 
which is a path to the directory that the file is in, and __filename which is the filename itself.

One of the properties on the module object is called exports. exports begins as an empty object, and is just sitting there waiting for us to put 
our code on it so that it can be pulled in by a require() function call somewhere else. This is how that looks in code:

// greeting.js

function greeting() {
    console.log("Hello there!");
}

module.exports = greeting;
We set the module.exports object on this file to be a function expression (the code of the function itself, without actually calling it). 
Now we can require this simple module from anywhere we want! Assuming we have another file (let's call it app.js) that's in the same directory as 
greeting.js, we can now do:

// app.js

var greeting = require("./greeting.js");
greeting(); // "Hello there!" prints to the console.
Because you'll almost exclusively be using modules that come from JavaScript files, you can actually leave out the .js on the module name:

var greeting = require("./greeting");
However, you MUST keep the path to the module there (in the above case, ./) if you are require-ing a module of your own. The only time you can 
remove it is if you are requiring a Node.js built-in module, or something you've installed with NPM that is inside the node_modules folder.

Node Module Patterns
node-modules-patterns-photo-banner.jpeg

There are a few different common patterns that are used to set up the structure of your modules in Node.js. We'll be discussing such common 
patterns in the section that follows below.

One of the main things to know/remember, which will help you immensely as you are trying to understand these different patterns, is that 
whatever you set module.exports equal to in one file is the thing that will get pulled in when you require() from another file.

1. Set module.exports equal to a function
You can set module.exports equal to a function (anonymous function expression OR a named function). When you require that module, what you pull in with require() is a function which you can then invoke (call) like normal.

Example 1 - exporting an anonymous function expression:
// greet1.js

module.exports = function() {
    console.log("Hello world");
}

// app.js

const greet = require("./greet1");
greet();
Example 2 - exporting a named function:
// greet1.js

function greeting() {
    console.log("Hello world");
}

// notice we don't execute the function, but just pass it as a variable
module.exports = greeting;  // NOT greeting()

// app.js

const greet = require("./greet1");
greet();


2. Add function expressions as properties on module.exports
If you do it this way, you will need to specify the property you want when you require the module:

// greet2.js

module.exports.greet = function() {
    console.log("Hello world!");
}


// app.js

// Either do:
var greet2 = require("./greet2"); // Returns module.exports, which contains a "greet" property on it
greet2.greet();

// Or:
var greet2 = require("./greet2").greet; // Returns just the greet property of module.exports
greet2();
3. Set module.exports to an object of your own with its own properties
This is very similar to #2 in that it exports an object with the properties set to the functions in your module you want to export.

This pattern is also known as the "Revealing Module Pattern" because it allows you to expose only the things you want to expose in your module. 
You may decide to run a bunch of logic, have helper functions, etc. all to come to a final result, and then only expose that final result when the 
require() function is run.

// greet3.js

var greeting = "Hello world!!!!";

function greet() {
    console.log(greeting);
}


// Replace module.exports object with my own object that just contains the one
// function. Even though I'm only exposing the one greet function, it still has
// access to all the other functions, login, variables, etc. within this file.
// This way, I can make it so I'm only exposing that which I want to expose
// when require() is called.
module.exports = {
    greet: greet
}

// app.js

var greet3 = require("./greet3");
greet3.greet();


4. Set module.exports equal to a function constructor
// greet4.js
function Greetr() {
    this.greeting = "Hello world!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;

// app.js

var Greet4 = require("./greet4");
var greetr = new Greet4();
greetr.greet();

Note: There is no "right" or "wrong" way to structure your modules, it's all about using the right tool for the job. You need to make sure the 
structure makes sense for what you are wanting to use it for, and gaining that understanding will come with time. For now, play around with 
different module styles and see which ones make the most sense to you.
*/