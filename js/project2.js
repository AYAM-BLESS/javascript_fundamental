//done by Ayamba Bless
//BMI calculator
/* create a BMI calculator using javascript
The body mass index(BMI) is a way of estimating the amount of body fat.
It is used in medicine to calculate the risk of heart disease.
You can calculate it using the formula below where weight divided by height squared
*/
//SOLUTION
function BMI(weight, height){
    let BMI = weight/(height)**2;  
    console.log(`Your body mass index is ${BMI} kilogram per meter squared`);
};
BMI(67, 1.9);


