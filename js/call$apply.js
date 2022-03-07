//done by ayamba bless
//call and apply in javascript
//call function example

var o = {
    carId:123,
    getId: function(){
        return this.carId;
    }
    };
    
    var newCar = { carId: 456};
    console.log( o.getId.call(newCar));