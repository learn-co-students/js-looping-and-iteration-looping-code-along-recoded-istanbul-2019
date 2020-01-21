// Code your solutions in this file


let event = ['surprise']
let names = [`Thank you, lisa, for the wonderful ${event} gift!`,`Thank you, Kaitlin, for the wonderful ${event} gift!`, `Thank you, Jan, for the wonderful ${event} gift!`]
function writeCards2(names, event) {
    for (let i = 0; i < names.length; i++) {
        console.log([names[i]])

    }

    return [names,event];       
}

writeCards2();

function writeCards(listName, word){

  for(let i = 0; i < listName.length; i++) {
    listName[i] = `Thank you, ${listName[i]}, for the wonderful ${word} gift!`; 

  }
      return listName;
}
      

writeCards();







  let startNumber = 10;
  function countDown(startNumber) {
    while (startNumber >= 0 ) {
        console.log(startNumber--)
      }
  }
    




