var readlineSync = require('readline-sync');
var playerName = readlineSync.question("May I have your name please? ");

var introMessage = `Welcome ${playerName} to the Escape Room Game Simulation`;
console.log(introMessage);

//Boolean Flags
var isAlive = true;
var hasKey = false;

while(isAlive == true){
	var menuID = readlineSync.keyIn("Press 1 to Put hand in hole \n Press 2 to Find the key \n Press 3 to Open the door", {limit: '$<1-3>'});
	if (menuID == 1){
		//Player selected menu option 1
		//Player put hand in the hold
		//Player is DEAD
		//Display appropriate message
		//Game is over
		console.log("You put hand in the hole and you are DEAD!!  GAME IS OVER.");
		isAlive = false;
	}
	else if (menuID == 2 && hasKey == false)
	{
		//Player had never found the key before.
		console.log(`${playerName}, you found the key successfully!`);
		hasKey = true;
	}
	else if (menuID == 2 && hasKey == true)
	{
		//Player had already found the key before.
		console.log(`${playerName}, you ALREADY found the key before.  Stop wasting your time and proceed to menu option 3 immediately.`);		
	}
	else if (menuID == 3 && hasKey == false)
	{
		//Player had never found the key before.
		console.log(`${playerName}, you first need to find the key and then come back to this menu option.`);		
	}
	else if (menuID == 3 && hasKey == true)
	{
		//Player had found the key before.
		console.log(`${playerName}, you found the key successfully, you opened the door successfully.  Congratulations, GAME IS OVER.  You WIN.`);	
		isAlive = false;	
	}
}