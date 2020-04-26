//FOR LOOP

//Learn.co Method
// let names = ["Ada", "Brendan", "Ali";
// function writeCards() {
//     for (let i=0; i<names.length; i++) {
//         console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!`);
//     }
//     return names;
// }
// writeCards()

let names = ["Lisa", "Kaitlin", "Jan"];
let namesEvent = "suprise";
let cards = [];

function writeCards(names, namesEvent) {
    for (let i = 0; i < names.length; i++) {
        cards[i] = `Thank you, ${names[i]}, for the wonderful ${namesEvent} gift!`;
        console.log(cards[i])
    }
    return cards
}
writeCards (names, namesEvent);


//WHILE LOOP

//Learn.co Method
// function countDown() {
//     let number = 10;
//     while (number >= 0) {
//         console.log(number--)    
//     }
// }
// countDown();



function countDown (number){
    let i = 0;
    while (i <= number) {
        console.log(number);
        number--;
    }
    return number;
}
countDown(10);