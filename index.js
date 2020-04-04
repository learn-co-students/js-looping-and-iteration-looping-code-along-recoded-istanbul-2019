// Code your solutions in this file
function writeCards(Names, eventName) {
    let thanks = [];
    for (let i = 0; i < Names.length; i++) {
        thanks.push(`Thank you, ${Names[i]}, for the wonderful ${eventName} gift!`)
    }
    return thanks;
}









function countDown(counter) {
    while (counter >= 0) {
        console.log(counter)
        counter--;
    }
}

countDown(10);