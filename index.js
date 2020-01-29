// Code your solutions in this file
const arrayNames = [ 'Lisa', 'Kaitlin', 'Jan' ];
const congrating = 'surprise';

function writeCards(arrayNames, congrating){
  let arr = [];
  for (let i = 0; i < arrayNames.length; i++){
    
    arr.push(`Thank you, ${arrayNames[i]}, for the wonderful ${congrating} gift!`) ;
  }
return arr;
}

let intNumber = 10;
function countDown(intNumber){
  
  while (intNumber >= 0){
    console.log(intNumber--);
  }
}