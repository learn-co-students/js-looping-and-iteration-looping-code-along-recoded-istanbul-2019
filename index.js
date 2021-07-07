// Code your solutions in this file

function writeCards(names,event) {
  let result=[];
  for (let i = 0; i < names.length; i++) {
    result.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return result;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(number){
  while(number >= 0 ){
    console.log(number)
    number--;
  }
}
countDown(10);
