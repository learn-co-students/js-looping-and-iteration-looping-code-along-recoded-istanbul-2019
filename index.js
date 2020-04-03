// Code your solutions in this file
function countDown (number){
    while (number !=-1)
    {
        console.log(number);
        number--;
    }
    return number;
}

console.log(countDown(20));

function writeCards (names, event){
const cards= [];

for (let i=0;i< names.length ; i++){
    cards[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    console.log(cards[i]);
}
return cards;
}

const friends = ["Ada", "Brendan", "Ali"];

console.log(writeCards(friends, "birthday"));