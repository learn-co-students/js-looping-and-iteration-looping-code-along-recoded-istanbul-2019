// Code your solutions in this file
let names = ['Lisa', 'Kaitlin', 'Jan'];
let event = 'surprise';
let message = [];

function writeCards(names, event) {
    for(let i = 0; i < names.length; i++) 
    { message[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!` };
    return message;
}

/* let countDown = 10;
while (countDown > -1) {
    console.log(countDown);
    countDown--;
} */

/* let number = [10,4];
let i = 0;

function countDown(number) {
    while(number[i] > -1) {
        console.log(number[i]);
        i++;
        number[i]--;
        
    }
    countDown();
}  */


/* let numbers = [10, 4];

function countDown(e) {

    for(let i = 0; i < numbers.length; i ++) {
         while(numbers[i] > -1) {
        console.log(numbers[i]);
        numbers[i]--;
    }   
    };
} */

function countDown(number) {
    let n = 0;
    while(n <= number) {
        console.log(number);
        number--;
    }
    return;
}
console.log(countDown(10));