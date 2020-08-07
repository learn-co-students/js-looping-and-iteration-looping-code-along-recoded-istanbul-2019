const names = ['Lisa','Kaitlin','Jan'] ;const eDay = "surprise";let message = [];
function writeCards(names,eDay) { for(let i = 0; i < names.length; i++ ){ message[i] =`Thank you, ${names[i]}, for the wonderful ${eDay} gift!`; } return message;}console.log(writeCards(names,eDay));


let x = 10;

function countDown(x){
    while (x >= 0){
        console.log(x--);
    }
}

countDown(x);