var readlineSync = require('readline-sync');
var playerName = readlineSync.question("State thy name, notable warrior. ");
var introMessage = `Welcome to Nevarr, ${playerName}! Now begins thy sacred quest...`;
console.log(introMessage);

const evilDudes = ['The Nightmare', 'Mistress Nacht', 'Gravid Arachnid', 'Tumescent Freak'];
const loot = ['Chalice of Malice', '50 Gold dubloons', 'Jewel of Cunning', 'Decantheon Relic'];
var prize = [];
const options = ['Walk', 'Print', 'Exit'];
let collect = loot[Math.floor(Math.random() * loot.length)]; 
var combatantHP = 30;
const avast = ('\nAn enemy approaches!');
var topic = readlineSync.question('How do you wish to proceed, warrior? **Press enter for menu items**');


//console.log(options[index] + ' ' + playerName + ' Has chosen.');


let evilDoers = evilDudes[Math.floor(Math.random() * evilDudes.length)];
let evilDudeHP = 30;
let villainAP = Math.floor(Math.random() * (5 - 3 + 2) + 5);
let combatantAP = Math.floor(Math.random() * (5 - 4 + 3) + 5);
// console.log(options[1]);


function questForNevarr(){
    //console.log("isnide function")
    var index = readlineSync.keyInSelect(options, 'Choose wisely...');
    //console.log("User provided index of: " + index);
    combatantHP = 30;
    //console.log("Value of index:" + index);
    let key = Math.random();
    if (options[index] === 'Walk'){
        //console.log("inside if block for walk");
        if (key < .25) {
            console.log('Walking...');
        } else if (key >= .25) {
            console.log(avast + ' ');
            console.log(evilDoers + ' Makes their presence known...');
            console.log("EvilDude: " + evilDudeHP + " Combatent: " + combatantHP);
        
            while (evilDudeHP > .05 && combatantHP > .05) {
                //var array = ['1.Attack thine enemy!' , '\n2.Flee in terror!'];
                //var combatant = readlineSync.keyIn(array, 'Attack thine enemy! Flee in terror!');
                const userOption = readlineSync.question("How do you want to proceed?  Enter 'r' to run away or 'a' to attack back: ");
            
                if (userOption == "a"){
                    //Attack thine enemy!
                    //console.log('case 1', combatant);
                    evilDudeHP -= combatantAP;
                    console.log('Slash ' + evilDoers + ' using '  + combatantAP + ' points of damage effect!' );
                    combatantHP -= villainAP;
                    console.log(evilDoers + ' Retaliates with ' + villainAP + ' points of agile vengence');
                    
                    if (evilDudeHP <= 0){
                        console.log('Thy enemy hath been slain!\n' + evilDoers + ' dropped loot! ' + collect);
                        let loot = Math.random();
                        if (loot <= .3){
                            prize.push(collect);
                            var index = readlineSync.keyInSelect(options, 'Choose wisely...');
                            console.log(options);
                        }
                    }else if (combatantHP <= 0){
                        console.log(evilDoers + ' has slaughtered: ' + playerName + '\nQuest failed.');
                    }
                }
                //Flee in terror!
                else if (userOption == "r") {
                    //console.log('case 2', combatant);
                    var flee = Math.random();
                    if (flee < .5) {
                        console.log('Escape is not swift enough! ' + evilDoers + ' Doth smite thee ' + villainAP + ' points damage.');
                    } else {
                        console.log('Escape is successful, fly like the wind!');
                        //evilDudeHP = 0;
                        break;
                    }
                }
            }
        }
    }
    else if (options[index] == 'Print'){
        console.log('\n' + playerName + ' Health status: ' + combatantHP + '\nLoot: ' + collect);
        var topic = readlineSync.question('How do you wish to proceed, warrior?' + ' **Press enter for menu items**');
        const options = ['Walk', 'Print', 'Exit'];
        var index = readlineSync.keyInSelect(options, + 'Choose wisely...');
    }  
    else if (options[index] === 'Exit') {
        return combatantHP = 0;
    }
}  // end of function
           
// while(combatantHP > 0){
//     combatantRevive = function(){
//         combatantActive = true;
//         combatantHP = 30;
//     }
//     combatantRevive();
//     //console.log("inside while");
    questForNevarr();
//}