//#1
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male",
    },  {
        name:"Madeline",
        age: 80,
        gender: "female",
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female",
    }, {
        name: "Sam",
        age: 30,
        gender: "male",
    }, {
        name: "Suzy",
        age: 4,
        gender: "female",
    },
];
function isOldEnough(){
    for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("old enough");
        }
        else {
            //if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){  ***Can write an if statment but not necessary.
            console.log("not old enough");
        }
    }
}
isOldEnough();
console.log("--------");


//#2
function isOldEnoughWithName(){
    for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.");
        }
        else {
            //if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){ ***Can write an if statment but not necessary.
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.");
        }
    }
}
isOldEnoughWithName();
console.log("--------");


//#3
function isOldEnoughWithGender(){
    for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'male'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HIM in");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'male'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE'S good to see Mad Max Fury Road.");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'female'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max Fury Road.");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'female'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, dont let HER in");
        }
    }
}
isOldEnoughWithGender();
console.log("------");


//#4
function oddOrEven(){
var i = 0;
for(i = 0; i <= 100; i++){
    // console.log(i, i % 2 === 0)
if (i % 2 === 1) {
    console.log(i, "odd")
}else {
console.log(i,"even")
}
    }
 }
oddOrEven();
console.log("--------")


//Extra Credit
/*
Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the 
numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.
The light is off to start with. Log to the console whether or not the light is on at the end.
*/

