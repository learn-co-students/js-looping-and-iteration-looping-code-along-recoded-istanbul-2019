// Code your solutions in this file

let people = ['Ada', 'Brandon', 'Ali'];
let occasion = 'birthday';

function writeCards(people,occasion)
{
    let thankYouMessages = [];
    for(let i = 0; i<people.length; i++){
        thankYouMessages[i] = `Thank you, ${people[i]}, for the wonderful ${occasion} gift!`;
    }
    return thankYouMessages;
}

function countDown(number)
{
    while(number>=0){
        console.log(number);
        number--;
    }
}