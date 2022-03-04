//done by ayamba bless
var message = 'Outside';   //with the var key word we cannot get block scope
if(5 === 5){
    var message = 'Equal';
    console.log(message);
}
console.log(message);