//done by ayamba bless
// function assesment
//write a javascript program to find the area of a triangle given
//the three sides of the triangle are a, b, c.
//area = sqrt(s*(s-a)(s-b)(s-c)). where s = a+b+c/2
//hints let area = Math.sqrt(s*(s-a)(s-b)(s-c)) and let s = a+b+c/2

//code for the above question

function calc(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    let s = a*b*c/2;

    let area = Math.sqrt(s*(s-a)(s-b)(s-c));

    document.getElementById("Answer").value = area;
}