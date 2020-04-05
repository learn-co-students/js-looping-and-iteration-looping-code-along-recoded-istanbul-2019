


let x = ["Ada", "Brendan", "Ali"];
let y = "birthday";
let z = [];
function writeCards(x,y) {
    for(let i = 0; i < x.length; i++ ) {
         z[i] =`Thank you, ${x[i]}, for the wonderful ${y} gift!`;
         }
     return z;
    }
    console.log(writeCards(x,y));


// let countup = 10;
function countDown(num) {
    while (num >= 0) {
    console.log(num--);
  }
  }
  countDown(10)