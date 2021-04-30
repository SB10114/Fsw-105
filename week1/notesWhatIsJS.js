/*
Here are some interesting facts about JavaScript:

XX Along with HTML and CSS, JavaScript is one of the three main things of the www (World Wide Web). It enables interactive web pages 
and thus is an essential part of web applications. Many websites use it and all major web browsers have a devoted JavaScript engine to execute it.

XX JavaScript is single threaded. This is the reason lots of people who use multi-threaded programming thinks it's working is slow as it 
would not be able to make use of all the cores of the computer processor properly.

XX Even though there are similarities between JavaScript and Java, including language name, respective standard libraries and syntax, 
these two languages are distinct and differ significantly in design.

XX Like all other scripting languages, arrays and objects can be created with a brief shortcut syntax. These literals structure the basis of JSON data
format.

XX JavaScript supports regular expressions in a manner like Perl, which provides a concise and powerful syntax for text manipulation that is more
sophisticated than the built-in string functions.

XX JavaScript is supported by all modern Web browsers with the built-in interpreters.

XXXXXXXXXXXXXXXX

XX What JavaScript IS 

JavaScript is a popular general-purpose scripting language used to put energy and pizzaz into otherwise dead Web pages by allowing a page to interact 
with users and respond to events that occur on the page. JavaScript has been described as the glue that holds Web pages together. It would be a hard task 
to find a commercial Web page, or almost any Web page, that does not contain some JavaScript code.

JavaScript, originally called LiveScript, was developed by Brendan Eich at Netscape in 1995 and was shipped with Netscape Navigator 2.0 beta releases. 
JavaScript is a scripting language that gives life, hence LiveScript, to otherwise static HTML pages. It runs on most platforms and is hardware independent.
JavaScript is a client-side language designed to work in the browser on your computer, not the server. It is built directly into the browser 
(although not restricted to browsers), Microsoft Internet Explorer and Mozilla Firefox being the most common browsers. 
In syntax, JavaScript is similar to C, Perl, and Java; for example, if statements and while and for loops are almost identical. 
Like Perl, it is an interpreted language, not a compiled language.

Because JavaScript is associated with a browser, it is tightly integrated with HTML. Whereas HTML is handled in the browser by its own networking library
and graphics renderer, JavaScript programs are executed by a JavaScript interpreter built into the browser. 
When the browser requests such a page, the server sends the full content of the document, including HTML and JavaScript statements, 
over the network to the client. 
When the page loads, HTML content is read and rendered line by line until a JavaScript opening tag is read, at which time the JavaScript interpreter 
takes over. When the closing JavaScript tag is reached, the HTML processing continues.

JavaScript handled by a browser is called client-side JavaScript. Although JavaScript is used mainly as a client-side scripting language, 
it can also be used in contexts other than a Web browser. Netscape created server-side JavaScript to be programmed as a CGI language, 
such as Python or Perl, but we will focus on JavaScript as it is most commonly used—running on the client side, your browser.

XXXXXXXXXXXXX

XX What JavaScript is NOT
JavaScript is not Java. “Java is to JavaScript what Car is to Carpet.” Well, that quote might be a little extreme, but suggests that these are two very 
different languages. Java was developed at Sun Microsystems. JavaScript was developed at Netscape. 
Java applications can be independent of a Web page, whereas JavaScript programs are embedded in a Web page and must be run in a browser window. 
Java is a strongly typed language with strict guidelines, whereas JavaScript is loosely typed and flexible. Java data types must be declared. 
JavaScript types such as variables, parameters, and function return types do not have to be declared. Java programs are compiled. 
JavaScript programs are interpreted by a JavaScript engine that lives in the browser.

JavaScript is not HTML, but JavaScript code can be embedded in an HTML document and is contained within HTML tags. 
JavaScript has its own syntax rules and expects statements to be written in a certain way. JavaScript doesn’t understand HTML, 
but it can contain HTML content within its statements. All of this will become clear as we proceed.

JavaScript is not used to read or write the files on client machines with the exception of writing to cookies. 
It does not let you write to or store files on the server. 
It does not open or close windows already opened by other applications and it cannot read from an opened Web page that came from another server. 
JavaScript is object based but not strictly object oriented because it does not support the traditional mechanism for inheritance and classes found 
in object-oriented programming languages, such as Java and C++. 
The terms private, protected, and public do not apply to JavaScript methods as with Java and C++.

JavaScript is not the only language that can be embedded in an application. 
VBScript, for example, developed by Microsoft, is similar to JavaScript, but is embedded in Microsoft’s Internet Explorer.

XXXXXXXXXXXXXXX

XX What JavaScript is USED FOR 

JavaScript programs are used to detect and react to user-initiated events, such as a mouse going over a link or graphic. 
They can improve a Web site with navigational aids, scrolling messages and rollovers, dialog boxes, dynamic images, and so forth.

JavaScript lets you control the appearance of the page as the document is being parsed. 
Without any network transmission, it lets you validate what the user has entered into a form before submitting the form to the server. 
It can test to see if the user has plugins and send the user to another site to get the plug-ins if needed. 
It has string functions and supports regular expressions to check for valid e-mail addresses, Social Security numbers, credit card data, and the like. 
JavaScript serves as a programming language. 
Its core language describes such basic constructs as variables and data types, control loops, if/else statements, switch statements, functions, 
and objects. 
It is used for arithmetic calculations, manipulates the date and time, and works with arrays, strings, and objects. 
It handles user-initiated events, sets timers, and changes content and style on the fly. 
JavaScript also reads and writes cookie values, and dynamically creates HTML based on the cookie value.

XXXXXXXXXXXXXX

XX JavaScript and Its ROLE in Web Development

When you start learning JavaScript, JavaScript code will be embedded directly in the content of an HTML page.  
Once we have covered the core programming constructs, you will see how a document is structured by using the document object model (DOM), 
and how JavaScript can get access to every element of your page. Finally, you need to be aware and knowledgeable about cascading style sheets (CSS) -
a technology that allows you to design your page with a stylized presentation.  
The combination of HTML, CSS, and JavaScript will allow you to produce a structured, stylized, interactive Web page.  
As your knowledge grows, so will your Web page, until it becomes necessary to create more pages and link them together.  
And then you still have to be sure your visitors are having a pleasant experience, no matter what browser they are using, at the same time trying to 
manage the site behind the scenes.  To keep all of this in perspective, Web designers have determined that there are really three fundamental parts to a
Web page: the content, the way the content is presented, and the behavior of that content.


XX The Three Layers
When a Web page is designed on the client (browser) side, it might start out as a simple HTML static page. 
Later the designer might want to add style to the content to give the viewer a more visually attractive layout. 
Last, to liven things up, JavaScript code is added to give the viewer the ability to interact with the page, make the page do something.  
A complete Web page, then, can be visualized as three separate layers: 

the content or structural layer, the style or presentation layer, and the behavior layer (see figure below).  

Each of these layers requires careful planning and skill. 
Designers are not necessarily programmers and vice versa. 
Separating the layers allows the designer to concentrate on the part he or she is good at, while the programmer can tweak the code in the 
JavaScript application without messing up the design.
Of course, there is often a blurred line between these layers but the idea of separating content structure and style from behavior lends to 
easier maintenance, less repetition, and hopefully less debugging.


XX Content or Structure
In Web development, HTML/XML markup makes up the content layer, and it also structures the Web document.  
The content layer is what a viewer sees when he or she comes to your Web page.  
Content can consist of text or images and include the links and anchors a viewer uses to navigate around your Web site. 
Because HTML/XML elements are used to create the structural content of your page, misusing those elements might not seem relevant for a quick visual fix,
but might be very relevant when applying CSS and JavaScript.  
For example, using headings out of order to force a change in font size, such H1, H3, and then H2 tags, in that order is invalid HTML.  
These tags are intended to define the structure of the document on the display.  
The browser views the Web page as a tree-like structure, a model consisting of objects, where each HTML element (e.g., HEAD, BODY, H1) is an object in 
the model.  
This document tree, the DOM, defines the hierarchical logic of your document, which becomes an important tool for creating dynamic content.  
Because the structure is so important, valid markup should be a priority before going to the next layer: the CSS presentation layer. 

XX Style or Presentation

The style or presentation layer is how the document will appear and on what media types.  
This layer is defined by CSS.  
Prior to CSS, nearly all of the presentation was contained within the HTML markup; all font colors, background styles, element positions and alignments, 
borders, and so on, had to be explicitly, often repeatedly, included in the HTML markup for the page.  
If, for example, you decided you wanted your page to have a blue font for all headings, then you would have to change each heading in the document.  
CSS changed all that.  It gave designers the ability to move the presentational content into separate style sheets, resulting in much simpler HTML markup.  
Now you could change the font color in one place to affect all of the pages in your site.  
Although styles can be embedded within a document and give you control over selected elements, it is more likely they will be found in 
separate .css files to let you produce sweeping changes over an entire document.  
With one CSS file you can control the style of one or thousands of documents.  
External style sheets are cached, reduce the amount of code, and let you modify an entire site without mangling the HTML content pages.  
And CSS works with JavaScript and the DOM to create a dynamic presentation, often known as DHTML.

XX Behavior

The behavior layer is the layer of a Web page that makes the page perform some action.  For most Web pages, the first level of behavior is JavaScript.  
JavaScript allows you to dynamically control the elements of the Web page based on user interaction such as an individual keystroke, moving a mouse, 
submitting form input, and so on.  
JavaScript also makes it easy to perform style changes on the fly.  
Although traditionally CSS and JavaScript are separate layers, now with the DOM, they work so closely together that the lines are somewhat blurred.  
JavaScript programs are often stored in external files, which are then put in libraries where other programmers can share them.

XX Unobtrusive JavaScript 

When you hear this phrase, “Make sure you use unobtrusive JavaScript,” and you will hear or read about it once you have started really using JavaScript, 
it refers to the three layers we just discussed.  
It is a technique to completely separate JavaScript from the other two layers of Web development by putting JavaScript code in its own file and leaving 
the HTML/XHTML/XML and CSS in their own respective files.  
In the following chapters we have included most of the JavaScript examples in the same the HTML document because the files are small and serve to teach 
a particular aspect of the language.  
So for the time being, we will be obtrusive.  
Once you have learned the JavaScript basics and start working on larger applications, you might want to understand this more fully.  
CC: The seven rules of unobtrusive JS.
*/

