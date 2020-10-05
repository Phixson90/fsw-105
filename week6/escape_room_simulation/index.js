const readlineSync = require('readline-sync');
const playerName = readlineSync.question("Please state your name.");
const welcomeMessage = `${playerName}, welcome to my escape room. May you live to tell the tale...`;
console.log(welcomeMessage)

let isAlive = true;
let hasKey = false;

while(isAlive === true){
    
    const menuOptions= readlineSync.keyIn('Press 1 to put your hand in the hole. \nPress 2 to find the key. \nPress 3 to open the door', {limit: '$<1-3>'});

    if (menuOptions == 1){
        console.log(`${playerName} has been killed by a dark force in the hole. GAME OVER... `);
        isAlive = false;
    }
    else if (menuOptions == 2 && hasKey == false){
        console.log(`Great job ${playerName}, you have found the key. You may continue the game.`);
        hasKey = true;

    }
    else if (menuOptions == 2 && hasKey == true) {
        console.log(`What are you doing ${playerName}? You already found the key!`);

    }
    else if (menuOptions == 3 && hasKey == false){
        console.log(`Sorry ${playerName}, but you need to have a key to open this door. Go back and come back once you have the key.`);

    }
    else if (menuOptions == 3 && hasKey == true){

        console.log(`YOU WON ${playerName}! You have unlocked the door and successfully exited the room with your life. GAME OVER.`);
        isAlive = false;
    }

}


