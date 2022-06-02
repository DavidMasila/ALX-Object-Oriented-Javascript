function multiply(n1,n2){
    return n1*n2;
};
//first way
multiply(12,4);

//using apply() method
multiply.apply(window,[12,4]);

//both ways give 48 in the browser console ofcourse. 