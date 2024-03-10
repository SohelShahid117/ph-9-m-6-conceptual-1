// primitive vs non primitive data type

// primitive
const x =1;
const y = true;
const name = 'sohel'

//non primitive
// const nmbr = [1,2,3]
let nmbr = [1,2,3]
const std = {
    name : 'sohel',
    age: 32,
    isMarried :true
}
console.log(x,typeof x);
console.log(y,typeof y);
console.log(name,typeof name);
console.log(nmbr,typeof nmbr);
console.log(std,typeof std);

let z = x;
z = 10;
console.log(x);
console.log(z)

let nmbr2 = nmbr;
// nmbr2 = [5,6,7,8,9];
console.log(nmbr)
console.log(nmbr2);
nmbr2.push(2);
console.log(nmbr)
console.log(nmbr2);
console.log(nmbr)

let std2 = std;
console.log(std)
console.log(std2)

std2.id = 0902117;
console.log(std);
console.log(std2);