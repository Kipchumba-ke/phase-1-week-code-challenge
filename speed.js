// Import readline module  and set up readline interface
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Function to determine speed
function checkSpeed(speed){
    const speedLimit = 70;
    const demerits = 5;
        if (speed <= speedLimit){
            console.log(`0K`);
            
        }else {
            let demeritPoints = Math.ceil((speed - speedLimit) / demerits);
        console.log("Points: " + demeritPoints + " " + `Demerit points`);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
    }
//User propmt to entre speed
rl.question(`Enter speed:`, function(speed){
    checkSpeed(speed);
    rl.close();       
   
})