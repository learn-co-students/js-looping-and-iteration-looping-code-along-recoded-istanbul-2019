// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];
const eventname = 'birthday';
let message = [];

function writeCards(names, eventname) {
    for (let i = 0; i < names.length; i++) {
        message[i] = `Thank you, ${names[i]}, for the wonderful ${eventname} gift!`;

    }
    return message;
}
writeCards(names, eventname);


function countDown(number) {
    let j = 0;
    while (j <= number) {
        console.log(number);
        number--;
    }
    return number;
}
countDown(5);