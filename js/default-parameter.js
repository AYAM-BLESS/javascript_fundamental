//done by ayamba bless
//default parameters
let trackCar = function(carId, city = 'NY'){
    console.log(`Tracking ${carId} in ${city}`);
}
console.log(trackCar(123));

console.log(trackCar(123, 'chicago'));