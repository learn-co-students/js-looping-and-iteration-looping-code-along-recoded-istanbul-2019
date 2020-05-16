// Code your solutions in this file
const cards1 = ["Lisa", "Kaitlin", "Jan"] 
 
function writeCards(cards, eventName) {
  let myMessages = []
  for (let i = 0; i < cards.length; i++) {
    myMessages.push(`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`)
  }
  return myMessages     
}
let returnValue = writeCards(cards1, "birthday")
console.log(returnValue)
writeCards(["Tayfun", "Zeynep"], "graduation", "amazing")
writeCards(["Ali", "Ayse"], "wedding", "awesome")

function countDown(n){
  while (n >= 0) {
      console.log(n--)
  }
}
countDown(10)