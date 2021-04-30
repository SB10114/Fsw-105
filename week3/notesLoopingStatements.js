/*
Example: Loop through the following array and count how many "computer" words there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
*Hint: to accomplish this assignment, we can use an If Statement with a For Loop. If you need a refresher on If Statements, please review the JavaScript If Statement video from Week 2.

Solution:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
var count = 0;

for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
        count++;
    }
}
console.log(count);  // -> 4
*/

