// Code your solutions in this file

let people = ['Ada', 'Brandon', 'Ali'];
let occasion = 'birthday';

function writeCards(people,occasion)
{
    for(let i = 0; i<people.length; i++){
        console.log(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`);
    }
}

let number = 10;

function countDown(number){
    while(number>0){
        console.log(`${number}`);
        number--;
    }
}