const petoWner = {
    name:'Sohel Shahid',
    contact :{
        phone :+8801823012335,
        email:'sohelshahid09@gmail.com'
    },
    pet:{
        name:'mito',
        info:{
            color:'orange',
            weight:'0.5 kg'
        }
    },
    education:{
        schoolame:'Uttar Pomra High School',
        subject:[
            {name:'bangla',marks:45},
            {name:'eng',marks:75},
            {name:'math',marks:95},
            {name:'PROGRAMMING',marks:99},
        ]
    }
}
console.log(petoWner);
console.log(petoWner.contact);
console.log(petoWner.contact.email);
console.log(petoWner.pet?.info?.weight);
console.log(petoWner.pet.info.weight?.food);
console.log(petoWner.pet.info.weight.food?.tood);
console.log(petoWner.education);
console.log(petoWner.education.subject);
console.log(petoWner.education.subject[0].name);
