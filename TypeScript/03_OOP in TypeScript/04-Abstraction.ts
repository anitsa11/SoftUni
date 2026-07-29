// interface Animal {
//     makeSound(): string;
// }

// class Dog implements Animal {
//     makeSound(): string {
//         return "Woof";
//     }
// }

// const dog = new Dog();
// console.log( dog.makeSound());

abstract class Animal {
    sound: string;

        constructor (sound: string)
     {
        this.sound = sound;
    }
    makeSound():void {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor (){
        super( "Woof");
    }
}
let dog = new Dog();
dog.makeSound();