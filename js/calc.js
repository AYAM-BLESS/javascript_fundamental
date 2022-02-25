//done by ayamba bless
//function that requires the user to input data in other to perform a calculation

function calc(){
    let w = document.getElementById("width").value;
    let h = document.getElementById("height").value;
    

    let area = w * h;

    document.getElementById("answer").value = area;

}