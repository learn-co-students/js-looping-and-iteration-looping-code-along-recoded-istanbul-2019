// Code your solutions in this file

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(names,event){
  let a=[];
  for(let i=0; i<names.length;i++){
    let str=names[i].toString();
    let s='Thank you, '+ str+', for the wonderful '+event +' gift!';
    a.push(s);
  }
  return a;
}

function countDown(n){
  while(n>=0){
    console.log(n--);
  }
}