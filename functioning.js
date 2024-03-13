//part-4

//global scope
//block scope
//local scope or functional scope
//var vs let vs const

let number = [4,5,6,23,74,99,10]
const modify=(a)=>{
    // a.push(69);
    // a=a+2;
    // a=a*2;
    a.map((x)=>x*2)
    console.log(a);
}
modify(number);

// number.map((x)=>x*2);
number.map((x)=>{
    let y = x*2;
    console.log(y)
});
// console.log(number)

function show(){
    console.log('I am an expert developer.');
}
function age(age,callbachFun){
    setTimeout(()=>{
        callbachFun()
    },2000)
    // callbachFun()
    console.log('my age is:',age);
}
age(36,show);
// setTimeout(()=>{

// },2000)