import { write } from "fs";

// Code your solutions in this file
function writeCards(name,eventName) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
  
  name[i]=(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
  }

return name;}
let name = ( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise'); 
let eventName = "surprise"; 

writeCards(names,eventName);

function countDown() {
    let i=0; 
    while (i<11) {
        console.log(i++) ;
    }
}