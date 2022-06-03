const duck={
    hasBill: true
};

const beaver={
    hasTail: true
};

const otter = {
    hasFur: true,
    feet: 'webbed'
};

const platypus = Object.assign({},duck,beaver,otter);

console.log(platypus);
//another way 
const combined ={};
Object.assign(combined,duck,beaver,otter);
console.log(combined);

const nothingbig = Object.assign(duck,beaver,otter);
console.log(nothingbig);

console.log(nothingbig === duck)
