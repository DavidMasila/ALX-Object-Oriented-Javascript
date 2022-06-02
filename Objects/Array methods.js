//for each

newArray=[1,4,22,7,88,99,100]

newArray.forEach(function(n){
    if (n%2 !==0){
        console.log(n);
    }
});

//or

function logIfOdd(n){
    if (n%2 !== 0){
        console.log(n);
    };
};

newArray.forEach(logIfOdd);

//map() function

const names =["David","Richard","Verenika"]

const namelengThs=names.map(function(name){
    return name.length;
});

console.log(namelengThs);

//filters

const shortNames = names.filter(function(name){
    return name.length < 6;
})

console.log(shortNames);