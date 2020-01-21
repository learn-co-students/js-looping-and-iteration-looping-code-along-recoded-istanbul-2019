// Code your solutions in this file
function writeCards(cards, eventName) {
    for (let i = 0; i < cards.length; i++) {
        cards[i]= 'Thank you, '+cards[i]+ ', for the wonderful '+ eventName+ ' gift!';
    }
   
    return cards;
  }

  writeCards(["Ada", "Brendan", "Ali"], "birthday");

  function countDown(number) {
   
    while (number >= 0) {
        console.log(number--);
    }
  }
  countDown(10);