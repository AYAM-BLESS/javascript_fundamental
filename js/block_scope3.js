//done by ayamba bless
let message = 'Outside';   //with the var key word we cannot get block scope
if(6 === 6){
    let message = 'Equal';
    console.log(message);
}
console.log(message);