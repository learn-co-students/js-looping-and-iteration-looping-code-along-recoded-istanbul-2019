

function writeCards(person, event) {
    let msg = []
    for (let i = 0; i < person.length; i++) {
        msg.push(`Thank you, ${person[i]}, for the wonderful ${event} gift!`)
}
return msg
}

function countDown(num) {
    while (num >= 0 ){
        console.log(num)
        num--
    }
}
