// Code your solutions in this file
function writeCards (names, event){
  const messages = [];
  for (let i = 0; i < message.length; i++){
    messages[i] = (`Thank you, ${names[i]}, for the wonderful ${event[i]} gift.`);
  }
  return messages;
}

function countdown(number){
  number < 0 ? number *= -1 : number;
  while (number >= 0 ){
    console.log(number);
    number--;
  }
}
