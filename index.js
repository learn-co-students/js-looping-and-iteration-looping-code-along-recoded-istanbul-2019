function writeCards(arr, event) {
    let newArray = [];
    for (let index = 0; index < arr.length; index++) {
        let message = ("Thank you, " + arr[index] + "," + " for the wonderful " + event + " gift!");
        newArray.push(message);
    }   
    return newArray;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num = num - 1;
    }
}