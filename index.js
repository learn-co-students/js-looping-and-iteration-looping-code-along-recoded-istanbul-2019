// Code your solutions in this file
let wrapgifts =["Ada", "Brendan", "Ali"];
let str = 'birthday';
let srtingr = '';
function writeCards(wrapgifts, str)
{
  let  msgfift=[];
  for(let i=0;i < wrapgifts.length;i++){
    srtingr= 'Thank you, '+wrapgifts[i]+", for the wonderful "+ `${str}` + " gift!";
    msgfift.push(`${srtingr}`);  
    console.log(`${srtingr}`);
  }
  return msgfift;
}
myresult =  writeCards(wrapgifts, str);


function countDown(num){
    while (num >=0){
      console.log(num);
      num--;
    }
}
countDown(10);