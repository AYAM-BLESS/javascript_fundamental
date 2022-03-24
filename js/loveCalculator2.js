//done by Ayamba Bless
//Love calculator
let myName = prompt("What is your name");
let herName = prompt("What is her name");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore);

if(loveScore < 30){
    alert(`The love score for ${myName} and ${herName} is ${loveScore}%. You should rethink this relationship`);
}

else if (loveScore > 30 && loveScore <= 50){
    alert(`The love score for ${myName} and ${herName} is ${loveScore}%. Put more effort to grow the relationship`);
}
else if (loveScore > 50 && loveScore <= 70){
    alert(`Your love score is ${loveScore}%. Wow this is a serious love between ${myName} and ${herName}.`);
}

else {
    alert(`Your love score is ${loveScore}%. What a magnificent love between ${myName} and ${herName} this love will last for ever.`);
}