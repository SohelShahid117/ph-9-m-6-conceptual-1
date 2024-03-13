//part-7

const add = (x,y) =>{
    const sum = x + y;
    console.log(sum);
}
add(2,3)
add(2)
add();


console.log(`----------------------------`)

const add2 = (x=0,y=0) =>{
    const sum = x + y;
    console.log(sum);
}
add2(2,3)
add2(2)
add2();

const std = {
    name : 'sohel',
    age:33
}
function showDetails(props){
    console.log(props)
    const{name,age}=props;//object destructuring
    console.log(name,age)
}
showDetails(std)


const showDetails2=({name,age})=>{
    console.log(name,age)
}
showDetails2(std)