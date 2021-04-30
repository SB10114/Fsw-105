var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//#1
vegetables.pop();
	console.log("vegetables: ", vegetables);
    console.log('----');
//#2
fruit.shift();   
    console.log("fruit: ", fruit);
    console.log('----');
//#3
var i = fruit.indexOf('orange');
    console.log('fruit: ' + i);
    console.log('----');
//#4
fruit.push(i);
    console.log('fruit: ' + fruit);
    console.log('----');
//#5
var p = vegetables.length;
    console.log('----');
//#6
vegetables.push(p);
    console.log('vegetables: ' + vegetables);
    console.log('----');
//#7
var food = fruit.concat(vegetables);
    console.log(fruit.concat(vegetables));
    console.log('----');
//#8
    food.splice(4,2);
    console.log(food)
    console.log('----');
//#9
    food.reverse();
    console.log(food);
    console.log('----');
//#10
    var foodString = food.toString();
    console.log(foodString);
