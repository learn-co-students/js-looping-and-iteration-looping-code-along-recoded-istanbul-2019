// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
const eday = "surprise";
let message = [];

function writeCards (names ,eday) {
    for (let i = 0; i < names.length; i++) {
      message[i] = (`Thank you, ${names[i]}, for the wonderful ${eday} gift!`);
    }
    return message;
}



function countDown(number){
    let j = 0;
    while (j<=number){
        console.log(number);
        number--;
    }
    return;
}
console.log(countDown(10));