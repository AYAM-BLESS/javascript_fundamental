//done by Ayamba Bless
//leap year challenge
/* write a program that works out if a given year is a leap year. A normal year has 365 days while a leap
year has 366 days, with an extra day in Febuary*/
//Note that for a year to be a leap year it has to be divisible by 4, 100, 400

let theYear = prompt("Enter the year to know if it is a leap year or not");
if (theYear % 4 === 0){
    alert(`${theYear} is a leap year`);
}

else if (theYear % 4 != 0){
    alert(`${theYear} is not a leap year`);
}
else if (theYear % 4 === 0 && theYear % 100 != 0){
    alert(`${theYear} is a leap year`);
}
else if(theYear % 100 === 0 && theYear % 400 != 0){
    alert(`${theYear} is not a leap`);
}
else if (theYear % 100 === 0 && theYear % 400 === 0){
    alert(`${theYear} is a leap year`);
}