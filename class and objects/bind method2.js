const driver = {
    name: 'Danica',
    displayName: function () {
      console.log(`Name: ${this.name}`);
    }
  };
  
  const car = {
    name: 'Fusion'
  };

driver.displayName.call(car); //using call to use displayName for car
driver.displayName.apply(car);//using apply() method
//using bind
driver.displayName.bind(car);