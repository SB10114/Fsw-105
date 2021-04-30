var readlineSync = require('readline-sync');
var playerName = readlineSync.question("May I have your name please? ");

var introMessage = `Welcome ${playerName} to the Escape Room Game Simulation`;
console.log(introMessage);

//Boolean Flags
var hasKey = false;

function canIOpenDoor(){
var i = readlineSync.keyIn(' 1.Put hand in hole \n 2.Find the key \n 3.Open the door' ,{limit: '$<1-3>'});
switch(Number(i))
{
    case 1:
        console.log('You Died');
        break;
    case 2:
        console.log('You found the key!');
        hasKey= true;
        canIOpenDoor();
        break;
    case 3:
        (hasKey ? console.log('The door is open') : console.log('Cannot open door without key'));
        (hasKey ? console.log('You win!') : canIOpenDoor());
        break;
    default:
        console.log('UNEXPECTED VALUE!');
}
}
canIOpenDoor();

