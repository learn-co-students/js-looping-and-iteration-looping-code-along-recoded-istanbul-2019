const names = ["Lisa", "Kaitlin", "Jan"];
const eventName = "surprise";

function writeCards(names,eventName){
  
	let thnkList = [];
	for (let i = 0; i< names.length;i++){
		
		 thnkList.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);


	}return thnkList;
	
}

writeCards(names,eventName);

function countDown(i ){
  // let nos = Number;
  // let i = 10;
  while (i >= 0){
  console.log(i--);
  }i--;
}

countDown(11);


