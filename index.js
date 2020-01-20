import { write } from "fs";

// Code your solutions in this file
let name = ["Lisa", "Kaitlin", "Jan"];

function writeCards(name) {

  for (let i = 0; i < name.length; i++) {
    console.log(`"Thank you, ${name[i]} for the wonderful surprise gift!"`);
  }
return name;}
writeCards(names);

function countDown() {
    let i=0; 
    while (i<11) {
        console.log(i++) ;
    }
}