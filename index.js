var quoteList = [
  "A few glasses of wine can be the difference between finding a man a hilarious companion or an insufferable moron",
  "No good deed goes unpunished", 
  "Duty is heavy as a mountain, death is light as a feather"
];

function randomQuotePicker(){
    let randomInteger = Math.floor(Math.random() * 3);
    console.log(quoteList[randomInteger]);
}

randomQuotePicker();