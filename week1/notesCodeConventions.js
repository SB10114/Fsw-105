/*
X WHAT IS A CODING CONVENTION?  The long-term value of software to an organization is in direct proportion to the quality of the codebase. Over its lifetime, a program will be handled by many pairs of hands and eyes. If a program is able to clearly communicate its structure and characteristics, it is less likely that it will break when modified in the never-too-distant future. Code conventions can help in reducing the brittleness of programs.

X What are JavaScript Files?  JavaScript programs should be stored in and delivered as .js files.  JavaScript code should not be embedded in HTML files unless the code is specific to a single session. Code in HTML adds significantly to page weight with no opportunity for mitigation by caching and compression. 

X What are Whitespaces? JavaScript ignores spaces, tabs, and newlines that appear in JavaScript programs. You can use spaces, tabs, and newlines freely in your program and you are free to format and indent your programs in a neat and consistent way that makes the code easy to read and understand.

X Blank lines improve readability by setting off sections of code that are logically related.

X Blank spaces should always be used in the following circumstances:

A keyword followed by ( left parenthesis should be separated by a space. Spaces are used to make things that are not invocations look less like invocations, so for example, there should be space after if or while.
        while (true) {
A blank space should not be used between a function value and its invoking ( left parenthesis. This helps to distinguish between keywords and function invocations.
The word function is always followed with one space.
No space should separate a unary operator and its operand except when the operator is a word such as typeof.
All binary operators should be separated from their operands by a space on each side except . period and ( left parenthesis and [ left bracket.
Every , comma should be followed by a space or a line break.
Each ; semicolon at the end of a statement should be followed with a line break.
Each ; semicolon in the control part of a for statement should be followed with a space.
Every statement should begin aligned with the current indentation. The outermost level is at the left margin. The indentation increases by 4 spaces when the last token on the previous line is { left brace, [ left bracket, ( left paren. The matching closing token will be the first token on a line, restoring the previous indentation.

X Semicolons are Optional
Simple statements in JavaScript are generally followed by a semicolon character, just as they are in C, C++, and Java. JavaScript, however, allows you to omit this semicolon if each of your statements are placed on a separate line. Note: It is a good programming practice to use semicolons.

X Case Sensitivity
JavaScript is a case-sensitive language. This means that the language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.  For example, the identifiers Time and TIME will convey different meanings in JavaScript.

XXX Note: Care should be taken while writing variable and function names in JavaScript.XXX

X Comments in JavaScript
JavaScript supports both C-style and C++-style comments:

X Any text between a // and the end of a line is treated as a comment and is ignored by JavaScript.

X any text between the characters /* and * / is treated as a comment. This may span multiple lines.

X JavaScript also recognizes the HTML comment opening sequence <!--. JavaScript treats this as a single-line comment, just as it does the // comment.

X The HTML comment closing sequence --> is not recognized by JavaScript so it should be written as //-->.

XXX JavaScript Datatypes
X One of the most fundamental characteristics of a programming language is the set of data types it supports. These are the type of values that can be represented and manipulated in a programming language.

X JavaScript allows you to work with three primitive data types:

X Numbers, eg. 123, 120.50 etc.

X Strings of text e.g. "This text string" etc.

X Boolean e.g. true or false.

X JavaScript also defines two trivial data types, null and undefined, each of which defines only a single value. In addition to these primitive data types, JavaScript supports a composite data type known as object. 

Note: JavaScript does not make a distinction between integer values and floating-point values. All numbers in JavaScript are represented as floating-point values. JavaScript represents numbers using the 64-bit floating-point format defined by the IEEE 754 standard.

X JavaScript Variables
Like many other programming languages, JavaScript has variables. Variables can be thought of as named containers. You can place data into these containers and then refer to the data simply by naming the container.  Before you use a variable in a JavaScript program, you must declare it.  Variables are declared with the var keyword as follows.

var money; 
var name;
You can also declare multiple variables with the same var keyword as follows:

var money, name;
Storing a value in a variable is called variable initialization. You can do variable initialization at the time of variable creation or at a later point in time when you need that variable.

X For instance, you might create a variable named money and assign the value 2000.50 to it later.  For another variable, you can assign a value at the time of initialization as follows:

var name = "Ali";
var money;
money = 2000.50;
Note: Use the var keyword only for declaration or initialization, once for the life of any variable name in a document. You should not re-declare same variable twice.

X JavaScript is untyped language. This means that a JavaScript variable can hold a value of any data type. Unlike many other languages, you don't have to tell JavaScript during variable declaration what type of value the variable will hold. The value type of a variable can change during the execution of a program and JavaScript takes care of it automatically.

X JavaScript Variable Names
While naming your variables in JavaScript, keep the following rules in mind.

X You should not use any of the JavaScript reserved keywords as a variable name. For example, for or boolean variable names are not valid.

X JavaScript variable names should not start with a numeral (0-9). They must begin with a letter or an underscore character.  For example, 123test is an invalid variable name but _123test is a valid one.

X JavaScript variable names are case-sensitive. For example, Name and name are two different variables.

XXX What is an Operator?
Let us take a simple expression 4 + 5 is equal to 9. Here 4 and 5 are called operands and ‘+’ is called the operator. JavaScript supports the following types of operators.

Arithmetic Operators
Comparison Operators
Logical (or Relational) Operators
Assignment Operators
Lets have a look on all operators one by one.
*/


/* 
JavaScript supports the following ARITMATIC OPERATORS.  Assume variable A holds 10 and variable B holds 20, then:

Operator // Description
+ (Addition)	Adds two operands.  Example: A + B will give 30
- (Subtraction)	Subtracts the second operand from the first.  Example: A - B will give -10
* (Multiplication)	Multiply both operands.  Example: A * B will give 200
/ (Division)	Divide the numerator by the denominator.  Example: B / A will give 2
% (Modulus)	Outputs the remainder of an integer division.  Example: B % A will give 0
        example: var myNum = 15;
if ((myNum % 2) == (1)){
    console.log('odd')
} else if ((myNum % 2) == (0)) {
    console.log('even')
}
OR
var myNum = 20;
var remainder = myNum %2;
if ((remainder) == (1)){
    console.log('odd')
} else if ((remainder) == (0)) {
    console.log('even')
}

++ (Increment)	Increases an integer value by one.  Example: A++ will give 11
-- (Decrement)	Decreases an integer value by one.  Example: A-- will give 9
Note: Addition operator (+) works for Numeric as well as Strings. e.g. "a" + 10 will give "a10".
*/

/*
JavaScript supports the following COMPARISON OPERATORS.  Assume variable A holds 10 and variable B holds 20, then:

Operator // Description
== (Equal Value)	
Also known as Equality Operator.  Checks if the value of two operands are equal or not, if yes, then the condition becomes true.  
Example: (A == B) is not true.

=== (Equal Value and Equal Type)	
Also known as Strict Equality Operator.  Checks whether the two operands are equal, returning a Boolean result.  Unlike the == (Equal Value) operator, 
the strict equality operator always considers operands of different types to be different.  
Example: If x = 5, then (x === 5) returns Boolean true and (x === "5") returns Boolean false.

!= (Not Equal)	
Also known as Inequality Operator.  Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.  
Example: (A != B) is true.

!== (Not Equal Value or Not Equal Type)	
Also know as Strict Inequality Operator.  Checks whether its two operands are not equal, returning a Boolean result.  Unlike the != operator, 
the Strict Inequality Operator always considers operands of different types to be different.  Example: If x = 5, then (x !== 5) returns Boolean false 
and (x !== "5") returns Boolean true.  However, (x !== 8) shall return Boolean true.

> (Greater than)	
Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.  
Example: (A > B) is not true.

< (Less than)	
Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.  Example: (A < B) is true.

>= (Greater than or Equal to)	
Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.  Example: (A >= B) is not true.

<= (Less than or Equal to)	
Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.  Example: (A <= B) is true.
*/

/*
JavaScript supports the following LOGICAL (RELATIONAL) OPERATORS. Assume variable A holds 10 and variable B holds 20, then:

Operator // Description
&& (Logical AND)	
If both the operands are non-zero, then the condition becomes true.  Example: (A && B) is true.

|| (Logical OR)	
If any of the two operands are non-zero, then the condition becomes true.  Example: (A || B) is true.

! (Logical NOT)	
Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it false.  Example: ! (A && B) is false.
*/

/*
JavaScript supports the following ASSIGNMENT OPERATORS:

Operator // Description
= (Simple Assignment )	
Assigns values from the right side operand to the left side operand.  

Example: C = A + B will assign the value of A + B into C

+= (Add and Assignment)	
It adds the right operand to the left operand and assigns the result to the left operand. Example: C += A is equivalent to C = C + A

−= (Subtract and Assignment)	
It subtracts the right operand from the left operand and assigns the result to the left operand.  Example: C -= A is equivalent to C = C - A

*= (Multiply and Assignment)	
It multiplies the right operand with the left operand and assigns the result to the left operand.  Example: C *= A is equivalent to C = C * A

/= (Divide and Assignment)	
It divides the left operand with the right operand and assigns the result to the left operand.  Example: C /= A is equivalent to C = C / A

%= (Modules and Assignment)	
It takes modulus using two operands and assigns the result to the left operand. Example: C %= A is equivalent to C = C % A
*/