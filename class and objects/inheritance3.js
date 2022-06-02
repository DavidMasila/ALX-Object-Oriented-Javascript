//hasOwnProperty//
/*
It returns a boolean indeicating whether the object has the specified property as its own 
property i.e the property is not inherited

Is invoked as a method into an object
*/
function Phone(){
    this.operatingSystem = 'Android';
};

Phone.prototype.screenSize = 6;

const myPhone = new Phone();
console.log(myPhone.screenSize);

console.log(myPhone.hasOwnProperty('operatingSystem'));
//true
console.log(myPhone.hasOwnProperty('screenSize'));
//false
