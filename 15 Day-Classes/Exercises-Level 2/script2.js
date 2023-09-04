//1-
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender;
    }

    makeSound(){
        console.log('Meow');
    }
    getInfo() {
        return `Name: ${this.name}, Gender: ${this.gender}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
    }

}

let Cat1 = new Cat('A',4,'white',3,'Female');
console.log(Cat1.getInfo());
Cat1.makeSound();
