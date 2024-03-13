/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/

//closure--->akti function r akti function k return kore

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();


  const outerFunc=()=>{
    let count = 0;

    function inner(){
        count++;
        console.log(count)
    }
    return inner;
  }
//   outerFunc();
  let x1 = outerFunc();
  x1();
  x1();
  let x2 = outerFunc();
  x2();