function multiply(n1,n2){
    return n1*n2;
};
//first way
multiply(12,4);

//using call() method
multiply.call(window,12,4);

//both ways give 48 in the browser console ofcourse. 