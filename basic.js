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

console.log(`-------------------------------`)

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

console.log(`-------------------------------`)
// let std2 = std;

//spread object
let std2 = {...std};
console.log(std)
console.log(std2)

std2.id = 0902117;
console.log(std);
console.log(std2);

console.log(`-------------------------------`)

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

console.log(`-------------------------------`)



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

console.log(`-------------------------------`)

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
console.log(number2);

console.log(`-------------------------------`)

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

console.log(`-------------------------------`)


//destructuring

const [p,q,r,...s] = a;
console.log(p);
console.log(q);
console.log(r);
console.log(s);

console.log(`-------------------------------`)

const person = {
    name : 'Sohel',
    age :32,
    numbrrr :[1,2,34,5,67,78],
    isDeveloper:true,
    nJoyNusiness : true,
    address:{
        zilla : 'chattogram',
        subZila:'Rangunia'
    }
};
const {name:personerNam,age:personerAge,...others}=person;
console.log(personerAge)
console.log(personerNam)
console.log(others);

console.log(`-------------------------------`)

const {address} =person;
console.log(address)

const {zilla,subZila} = address;
console.log(zilla)
console.log(subZila)

console.log(`-------------------------------`)

console.log(address)
const{address:{zilla:thikana},address:{subZila:upaZila}} = person;
console.log(thikana)
console.log(upaZila)
console.log(`-------------------------------`)

function add(x,y){
    return x+y;
}
console.log(add(2,3));

const sum =(x,y)=>{
    return x+y
}
const result = sum(3,4);
console.log(result);

console.log(sum(22,33));

const double = (x)=>x*2;
console.log(double(5));