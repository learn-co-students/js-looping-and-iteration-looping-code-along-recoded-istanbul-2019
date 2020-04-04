// Code your solutions in this file

const names = ['Lisa', 'Kaitlin', 'Jan'];
var messages =[];

function writeCards(names,event) {
    for (let i = 0; i < names.length; i++) {
      messages[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }

writeCards(names,'surprise');

function countDown(num){
    while(num>=0){
        console.log(num);
        num--;
    }
    
}
countDown(10);