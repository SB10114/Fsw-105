var readlineSync = require('readline-sync');
var playerName = readlineSync.keyIn("State thy name, notable warrior. ");

var introMessage = `${playerName}! You are now entering Nevarr...`;
console.log(introMessage);

const evilDudes = ['The Nightmare', 'Mistress Nacht', 'Gravid Arachnid', 'Tumescent Freak'];
//const commands = ['Walk', 'Exit', 'Print'];
const loot = ['Chalice of Malice', '50 Gold dubloons', 'Jewel of Cunning', 'Decantheon Relic'];
var prize = [];
let combatantHP = 50;
let collect = loot[Math.floor(Math.random() * loot.length)]; 

//Boolean
//isFight = true;
//notFight = false;

function questForNevarr(){
    const aP = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const evilDoers = evilDudes[Math.floor(Math.random() * evilDudes.length)];
    let evilDudeHP = 50;
    const villainAP = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const forward = readlineSync.keyIn('How do you wish to proceed, warrior? (Press space bar for options)');
    const avast = ('\n An enemy appears!');
    var option = readlineSync.keyIn(' 1.Attack thine enemy!\n 2.Flee in terror!' + '  ' , {limit: '$<1-3>'});
    
    
var i = readlineSync.keyIn(' 1.Walk on... \n 2.Print stats: \n 3.Exit game.'+ '  ',{limit: '$<1-3>'});
switch(Number(i))
{
    case 1:
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking...');
        } else if (key >= .3) {
            console.log(avast + ' ');
            console.log('\n'+ evilDoers + ' ' + 'Makes their presence known...')
        } 
        
        let aP = Math.floor(Math.random() * (5 - 4 + 3) + 5);
        if  (aP > 2 || aP < 6 ){
            console.log(option);
        } else {
            
        }  
        
        
        

        //readlineSync.keyIn(' 1.Attack thine enemy!\n 2.Flee in terror!' + '  ' , {limit: '$<1-3>'});
        
        (aP ? console.log('Your attack is a success!') : console.log('Enemy kills you!'));

        //questForNevarr();
        break;
    case 2:
        //const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
        //(isFight ? console.log('Enemy kills you!') : console.log('Your attack is a success!'));
        //(isFight ? console.log('Your attack is a success!') : questForNevarr());
        break;
    case 3:
        console.log('Dost thou wish to abandon thy honorable crusade, warrior?');
        readlineSync.keyIn('y for yes, n for no:' + ' ');
        notFight = false;
        //isFight = true;
        (notFight ? console.log('Quest abandoned...') : questForNevarr());
        (notFight ? console.log('The Quest Continues!') : questForNevarr());
        break;
    default:
        console.log('UNEXPECTED VALUE!');
}
}
questForNevarr();

