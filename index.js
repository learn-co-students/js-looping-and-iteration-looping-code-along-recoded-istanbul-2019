// Code your solutions in this file
const cards = ["Ada", "Brendan", "Ali"];
const event = "surprise"
function writeCards(cards,event) {
    let halit = []
for (let i = 0; i < cards.length; i++){
    halit [i] = `Thank you, ${cards[i]}, for the wonderful ${event} gift!`;
    }
return halit;
}



let x = 10;
function countDown(x){
while (x >= 0){
    console.log(x--);
}
}
