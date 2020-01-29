// Code your solutions in this file

const people = ["Lisa", "Kaitlin", "Jan"];
const event = "surprise"
let congMessage = people.slice();

function writeCards(people, event) {
    for (let i = 0; i < people.length; i++) {
        congMessage[i] = (`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    } 
    return congMessage;
}

let num = 0;
function countDown(num) {
    while(num!=0) {
        console.log(num);
        num = num-1;
    }
    console.log(num);
}