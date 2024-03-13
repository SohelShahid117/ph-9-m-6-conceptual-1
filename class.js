//part-5

//Classes are a template for creating objects
class animal {
    name ='abc'
    color = 'xyz'
    show(){
        let a = 10;
        // a = 10;
        console.log(a);
        console.log('hello from animal')
    }
}
const cat = new animal;
console.log(cat.name)
console.log(cat.color)
// console.log(cat.show())
cat.show()

console.log(`------------------------------------`)
const cow = new animal;
console.log(cow.name)
console.log(cow.color)

console.log(`------------------------------------`)
class poshaPrani{
    name;
    color;
    constructor(petName,petColor){
        this.name = petName;
        this.color = petColor;
    }
    showInfo(){
        console.log(`my pet name is : ${this.name} & color is : ${this.color}`)
    }
};
const bilai = new poshaPrani('mio-mio','white');
// console.log(bilai.color)
// console.log(bilai.name)
bilai.showInfo();

const goroooo = new poshaPrani('hamba-hamba','lal');
goroooo.showInfo()

console.log(`------------------------------------`)

// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    showDetails(){
        console.log(`rectangle height is : ${this.height}  & width is :  ${this.width}`)
    }
  }
  
  /*
  // Expression; the class is anonymous but assigned to a variable
  const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  */
 const rectanglll = new Rectangle(40,20);
rectanglll.showDetails()

console.log(`------------------------------------`)

/*
Inheritance
The extends keyword is used in class declarations or class expressions to create a class as a child of another constructor (either a class or a function).

*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.

console.log(`------------------------------------`)


class Owner{
  // ownerName = 'abc';
  // ownerAge = 32;
  constructor(ownerName,ownerAge){
    this.ownerName = ownerName
    this.ownerAge = ownerAge
  }
  ownerInfo(){
    console.log(`owner name is : ${this.ownerName} &  age is : ${this.ownerAge}`)
  }
}
const malikkk = new Owner;
malikkk.ownerInfo()
// console.log(malikkk.ownerInfo());

class poshaPrani2 extends Owner{
  name;
  color;
  constructor(petName,petColor){
      // super()
      super('sohel',32)
      this.name = petName;
      this.color = petColor;
  }
  showInfo2(){
      console.log(`my pet name is : ${this.name} & color is : ${this.color}`)
  }
};

const cat2 = new poshaPrani2('meooo-meooo','lal-kala-sada');
cat2.showInfo2();
cat2.ownerInfo()

console.log(`------------------------------------`)