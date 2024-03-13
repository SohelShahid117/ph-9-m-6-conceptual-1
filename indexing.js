const number = [1,22,33,45,63,72];
number.map((itm,itmIndx,itmArr)=>{
    console.log('item:',itm,'item index:',itmIndx,'Item Array:',itmArr)
})
console.log(`-------------------------`)
number.forEach((itm,itmIndx,itmArr)=>{
    console.log('item:',itm,'item index:',itmIndx,'Item Array:',itmArr)
})
