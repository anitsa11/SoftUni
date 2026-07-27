"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    firstName;
    lastName;
    age;
    // firstName: string;
    // lastName: string;
    // age: number;
    // constructor (firstName: string, 
    //     lastName: string,
    //     age: number
    // ) {
    //     // this.firstName = firstName;
    //     // this.lastName = lastName;
    //     // this.age = age;
    // }
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    introduce() {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
}
const person = new Person("John", "Doe", 30);
console.log(person.introduce());
//# sourceMappingURL=01-Create-a-person-class.js.map