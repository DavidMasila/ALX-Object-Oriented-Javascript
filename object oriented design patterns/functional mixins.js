function CoffeeMaker(object){
    let needsRefill = false;

    return Object.assign({},object, {
        pourAll: function(){
            needsRefill = true;
        },
        isEmpty: function(){
            return needsRefill;
        }
    });
};

const mixedCoffeMaker = CoffeeMaker({style: 'percolator'});

/*
{
  style: 'percolator',
  pourAll: function () {
    needsRefill = true;
  },
  isEmpty: function () {
    return needsRefill;
  }
}
*/

console.log(mixedCoffeMaker);