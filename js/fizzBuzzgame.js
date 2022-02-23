//done by ayamba bless
//Simple game
//instructions
//declare and initialize your variable num = 1
//print out FizzBuzz if num % 3 and num % 5 equals 0 
//print out Fizz if num % 3 = 0
//print out Buzz if num % 5 = 0
//else print num
let num;
for(num = 1; num<=100; num++){
    if(num % 3 ==0 && num % 5 == 0){
        document.write("FizzBuzz <br/>");
    }
    else if(num % 3 == 0){
        document.write("Fizz <br/>");
    }
    else if(num % 5 == 0){
        document.write("Buzz <br/>");
    }
    else{
        document.write(num, " <br/>")
    }
}