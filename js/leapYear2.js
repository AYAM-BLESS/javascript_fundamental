//done by Ayamba Bless
//leap year challenge
/* write a program that works out if a given year is a leap year. A normal year has 365 days while a leap
year has 366 days, with an extra day in Febuary*/
//Note that for a year to be a leap year it has to be divisible by 4, 100, 400

//Solution for the problem using functions

function leapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "Leap year";
            }
            else{
                return "Not a leap year"
            }
        }
        else{
            return "Leap year";
        }
    }
    else{
        return "Not a leap year";
    }
}

alert(leapYear(2035));