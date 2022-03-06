//done by ayamba bless
//this keyword example 3

let o = {
    carId:123,
    getId: function(){
        console.log(this);
        return this.carId;
    }
    };
    console.log(o.getId());