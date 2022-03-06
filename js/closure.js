//done by ayamba bless on the 05/03/2022
// closures in javascript

let app = (function(){
    let carId = 123;
    let getId = function(){
        return carId;
    };
    return {
        getId: getId
    };
})();
console.log(app.getId());