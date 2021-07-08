// Code your solutions in this file
function writeCards( namesArray, word ) {
  let arr = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    arr.push( `Thank you, ${namesArray[i]}, for the wonderful ${word} gift!` )
  }
  return arr
}

function countDown( num ) {
  while ( num > 0 ) {
    console.log( num );
    num -= 1;
  }
  console.log( num );
}