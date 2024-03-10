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

// let std2 = std;
let std2 = {...std};
console.log(std)
console.log(std2)

std2.id = 0902117;
console.log(std);
console.log(std2);

//object destructuring
const {id,name22,age} = std2
console.log(id)
console.log(name22)
console.log(age)

//object destructuring
const {id:amarId,name:amarNam,age:amarAge} = std2;
console.log(amarId)
console.log(amarNam)
console.log(amarAge)



//truthy vs falsy value

//falsy value ===> false,0,'',NaN,undefined,null
//truthy value ===>true,123,'aadil',[],{}

// const value = false;
// const value = 0;
// const value = NaN;
// const value = undefined;
// const value = null;


// const value = true;
// const value = 123;
// const value = 'adil';
// const value = [];
const value = {};
console.log(value);
console.log(!!value);//truthy or falsy value check

const number = [7,89,99,87,56];
const number2 = [];
for(num of number){
    number2.push(num);
}

console.log(number)
console.log(number2)

number.push(99);
number2.push(199);

console.log(number)
console.log(number2)

// number2=number;

// console.log(number)
// console.log(number2)

let a = [33,44,55,66,777,88];

//spread array
const b = [...a];
console.log(a)
console.log(b)

a.push(989)
b.push(909)

console.log(a)
console.log(b)


//destructuring

const [p,q,r,...s] = a;
console.log(p);
console.log(q);
console.log(r);
console.log(s);
