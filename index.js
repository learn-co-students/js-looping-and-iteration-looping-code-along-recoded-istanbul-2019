// Code your solutions in this file

function countDown(num){
    for (let countup = 10; countup >= 0; countup--) {
        console.log(countup);
      }
}

const names = ["Lisa", "Kaitlin", "Jan"];

const event = 'surprise';



function writeCards(){
    let a = [];
     for (let i = 0; i < names.length; i++) {
      a.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      }
      
      return a;
}
