"use strict";
// interface Animal {
//     makeSound(): string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// class Dog implements Animal {
//     makeSound(): string {
//         return "Woof";
//     }
// }
// const dog = new Dog();
// console.log( dog.makeSound());
class Animal {
    sound;
    constructor(sound) {
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class Dog extends Animal {
    constructor() {
        super("Woof");
    }
}
let dog = new Dog();
dog.makeSound();
//# sourceMappingURL=04-Abstraction.js.map