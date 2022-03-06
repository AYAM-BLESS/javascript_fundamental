//done by ayamba bless
//call and apply in javascript
//call function example

let o = {
    carId:123,
    getId: function(){
        return this.carId;
    }
    };
    
    let newCar = { carId: 456};
    console.log( o.getId.call(newCar));