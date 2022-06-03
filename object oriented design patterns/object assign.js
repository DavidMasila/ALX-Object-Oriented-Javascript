let target ={};

let source = {number:7};

Object.assign(target,source);

console.log(target);
//we have assigned the properties of source to targhet without heredity
//Object.assign overwrites the properties in the target object.

let target2 = { letter: 'a', number: 11}
let source2 = {number: 7}

Object.assign(target2,source2);

console.log(target2);
//the 11 is overwritten to 7
