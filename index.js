// Code your solutions in this file
let array = [];
function writeCards(name, eventName) {
    for (let i = 0; i < name.length; i++) {
        array.push("Thank you, " + name[i] + ", for the wonderful " + eventName + " gift!");
    }
    return array;
}


function countDown(integer) {
    while(integer > 0) {
        console.log(integer);
        integer = integer -1;
    }
    console.log(integer);
    
}