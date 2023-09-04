//1-
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
}
const animal1 = new Animal("Sun",4,"Black",5);

console.log(animal1);
//2-
class Dog extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender;
    }
    getInfo() {
        return `Name: ${this.name}, Gender: ${this.gender}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
    }

}

let Dog1 = new Dog('x',4,'white',7,'Female');
console.log(Dog1.getInfo());

class Cat extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender;
    }
    getInfo() {
        return `Name: ${this.name}, Gender: ${this.gender}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
    }

}

let Cat1 = new Cat('A',4,'white',3,'Female');
console.log(Cat1.getInfo());
