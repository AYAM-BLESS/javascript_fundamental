//done by ayamba bless on the 15/03/2022
//functions
function getMilk(money){
    let numberOfBottles = Math.floor(money / 1.5);
    console.log("Buy " + numberOfBottles + " bottles of milk ");
    return money % 1.5;
}
let change = getMilk(50);
console.log(" Your change is " + change + " dollars");
