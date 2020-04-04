// Code your solutions in this file

nameList=["Ada", "Brendan", "Ali"];
whatToWrite="birthday";
messageList = writeCards(nameList, whatToWrite);
console.log(messageList);
countDown(10);

function countDown(number) {
  while (0<=number) {
    console.log(number);
    number--;
  }

}
function writeCards(nameList, whatToWrite) {
  let message=[""];
  for (let i = 0; i < nameList.length; i++) {
    message.push("Thank you, "+ nameList[i] +", for the wonderful "+ whatToWrite+ " gift!");
  }
  message.shift();
  return message;


}
