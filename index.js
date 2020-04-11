// Code your solutions in this file

const namesArray = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards (namesArray, event) {

    let thanksArray = [];
    for (let i = 0 ; i < namesArray.length ; i++) {
        thanksArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }

    return thanksArray;
}

function countDown (number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}