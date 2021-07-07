// // Code your solutions in this file
// const names = ["Lisa", "Kaitlin", "Jan"];
// const birthday = "birthday";
// function writeCards(names, birthday) {
//     for(let i = 0; i < names.length; i++) {
//         console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!`);
//     }
//     return names;
// }
// writeCards(names);



const names = ['Lisa','Kaitlin','Jan'];
let message = [];
function writeCards(names) {
    for (let i = 0 ; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return message;
}

let number = 10;
function countDown(number) {
    for( let i = number; i >= 0; i--) {
        console.log(i);
    }
    return number;
}

countDown(4) 

