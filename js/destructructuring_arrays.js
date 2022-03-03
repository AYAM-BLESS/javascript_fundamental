//done by ayamba bless
//when we atea destructuring an array, we are assingning it into a variable
//first example
let nameOfAnimals = ["Cats", "Dogs", "Goats", "Cows"];
let [animal1, animal2, animal3, animal4] = nameOfAnimals;
document.write(animal1 );

//example 2

let carNames = ["Toyota", "BMW", "Lexus", "Innoson"];
let car1, remainingCars;
[car1, ...remainingCars] = carNames;
document.write(car1, remainingCars);



