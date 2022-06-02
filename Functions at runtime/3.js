const triangle = {
    type: 'scalene',
    identity : function(){
        console.log('This is a ',triangle.type,' triangle')
    },
};


triangle.identity();

const triangle1 = {
    type: 'scalene',
    identify: function () {
      console.log(`This is a ${this.type} triangle.`);
    },
};

triangle1.identify();