//done by ayamba bless
//this keyword example 2

let o = {
    carId:123,
    getId: function(){
        return this.carId;
    }
    };
    console.log(o.getId());