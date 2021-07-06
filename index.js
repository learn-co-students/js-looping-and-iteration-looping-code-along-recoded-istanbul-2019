// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = "birthday";

function writeCards(names, event) {
    let myCards = [];
    for (let i = 0; i < names.length; i++) {
        myCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return myCards;
}

let countDown = 56

function countDown(n) {
    if (countDown < 1) {
        return [];
    } else { const myArray = countDown(n-1);
    myArray.push(n);
    return myArray;
    }
}

// let countdown = n;

// function countDown(n) {
//     if (n < 1) {
//         return [];
//     } else { const myArray = countDown(n - 1);
//     myArray.unshift(n);
//     return myArray;
//     }
// }
//  console.log(countdown(56));