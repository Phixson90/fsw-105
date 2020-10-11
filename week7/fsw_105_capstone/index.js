const readlineSync = require('readline-sync');

const name = readlineSync.question("Please state your name...");
readlineSync.question(name + "! Welcome to the most dagerous game! May you enter with courage and leave with your life! Press enter to begin.");

const enemies = ["Covid-19 Monster", "Unmasked Covid Patient", "Evil SARS Baby", "Antifa Protester"];
const items = ["Masks", "Covid-19 Vaccine", "Ventilator", "Hydroxychloroquine"];
var prize = [];
let playerHealth = 40;
const options = ["Walk", "Exit", "Print"];
let pickUp = items[Math.floor(Math.random() * items.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (10 -7 + 1) + 2);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemiesHealth = 40;
    const enemiesPower = Math.floor(Math.random() * (10 -7 + 1) + 2);

    const index = readlineSync.keyInSelect(options, "What would you like to do next?");

    if(options[index] == "Exit") {
        return playerHealth = 0;
    } else if (options[index] == "print"){
        console.log(name + ': \n' + playerHealth + '\nItems: ' + pickup);
    } else if (options[index] == "Walk"){
        let key = Math.random();
        if (key <= .3) {
            console.log("Walking...");
        }else if (key >=.3) {
            console.log(enemy + " appeared!");

            while(enemiesHealth > 0 && playerHealth > 0) {
                const user = readlineSync.question("What will you do next? Press 'r' to run or 'a' to attack: ");

                switch (user){
                    case 'r':
                        const run = Math.random();
                        if(run < .5) {
                            console.log("Got away safely!");
                            break;
                        }
                        case 'a':
                            enemiesHealth -+ attackPower;
                            console.log ("You attacked " + enemy + "with " + attackPower + " attack power" );

                            playerHealth -= enemiesPower;
                            console.log("Enemy just attacked you with: " + enemiesPower + " attack power");

                            if(enemiesHealth <= 0){
                                console.log("You slayed " + enemy + '.\n' + enemy + " left: " + pickUp);
                                let loot = Math.rondom();
                                if (loot <= .3){
                                    prize.push(pickup);
                                }else if(playerHealth <= 0){
                                    console.log("You have been slayed by the " + enemy + ". You are Dead. GAME OVER.")
                                }

                            }
                }
            }
        }
    }
}

while(playerHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}