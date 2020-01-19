// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names,b){
    for(let i = 0;i<names.length;i++){
        // console.log(`Thank you, ${names[i]}, for the wonderful ${b} gift!`);
        names[i] = `Thank you, ${names[i]}, for the wonderful ${b} gift!`
    }

    return names;
}

writeCards(names,"surprise");

let number;
function countDown(number){
    while (number >= 0){
        console.log(number)
        number--;
    }
}

