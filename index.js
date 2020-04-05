// Code your solutions in this file
const names = ['Lisa','Kaitlin','Jan'] ;
const eDay = "surprise";
let message = [];

function writeCards(names,eDay) {  
  for(let i = 0; i < names.length; i++ ){
   message[i] =`Thank you, ${names[i]}, for the wonderful ${eDay} gift!`;
  }
  return message;
}
console.log(writeCards(names,eDay));

/*Count Down*/ 

function countDown(number){
  let i = 0;
  while(i<=number){
    console.log(number) ;
    number--;
  }
  return;
}
console.log(countDown(10));