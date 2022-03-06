//done by ayamba bless
//call and apply in javascript
//apply function example

let o = {
    carId:123,
    getId: function(prefix){
        return prefix + this.carId;
    }
    };
    
    let newCar = { carId: 456};
    console.log( o.getId.apply(newCar, ['ID:']));