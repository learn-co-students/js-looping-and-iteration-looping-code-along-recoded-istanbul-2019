
function writeCards(names, reason){
    
    for (let index = 0; index < names.length; index++){


          names[index]= `Thank you, ${names[index]}, for the wonderful ${reason} gift!`
       
       
    }
    return names;
    
}


function countDown(number){
    while(number > -1){
        console.log(number);
        number--;
    }
}

countDown();
const mess = writeCards().push;
