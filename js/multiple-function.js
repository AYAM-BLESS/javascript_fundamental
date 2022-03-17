//done by ayamba bless on the 15/03/2022

//multiple functions

function getMilk(money, costPerBottle){
    
    console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk ");
    return calcChange(money, costPerBottle);
}

//calcBottle function

function calcBottles (startingMoney, costPerBottle){
    let numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

//calcChange function
function calcChange(startingAmount, costPerBottle){
    let change = startingAmount % costPerBottle;
    return change;
}

let change = getMilk(200, 3.5);
console.log(" Your change is " + change + " dollars");
