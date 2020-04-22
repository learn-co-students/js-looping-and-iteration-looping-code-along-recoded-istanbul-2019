// Code your solutions in this file

const cards = ["Ada", "Brendan", "Ali"];
const event = "surprise";

function writeCards (cards, event) {
    let greeting = [];
for (let i = 0; i < cards.length; i++) {
       greeting[i] = (`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    
return greeting;
}

writeCards (cards, event);

/*
function countDown(number) {
let countDown = 0;
while (countDown <= number){
    console.log(number--);
}
}
countDown(10);
*/

let arg = 10;
function countDown(arg) {

while ( arg >= 0) {
    console.log(arg--);
}
}
