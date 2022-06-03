//factory functions

function Basketball(color){
    return{
        color: color,
        numDots: 35000
    };
};

const orangeBasketball = Basketball('orange');
console.log(orangeBasketball);

//can be used over and over again

const myBB = Basketball('blue and green');
const yourBB = Basketball('purple');
const bouncy = Basketball('neon pink');