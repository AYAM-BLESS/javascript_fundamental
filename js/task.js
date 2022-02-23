//done by Ayamba bless
//write a program to print out the following scores in a tertiary institution
//if a student got between 75-100 print out >> First Class Upper
//if a student got between 65-74 print out >> Second Class Upper
//if student got between 50-64 print out >> Second Class Lower
//if student got between 41-49 print out >> Third Class
//if student got between 30-40 print out >> Pass
//else FAIL
let score = 20;
if(score >= 30 && score <=40){
    console.log("Pass");
}
else if(score >= 41 && score <= 49){
    console.log("Third Class");
}
else if(score >= 50 && score <= 64 ){
    console.log("Second Class Lower");
}
else if(score >= 65 && score <= 74){
    console.log("Second Class Upper");
}
else if(score >= 75 && score <= 100){
    console.log("First Class Upper");
}
else{
    console.log("FAIL");
}
