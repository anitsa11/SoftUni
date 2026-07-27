"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = {
    fName: 'John',
    lName: 'Doe',
    age: 22,
    getPersonInfo() {
        return;
        `${this.fName} ${this.lName}, age ${this.age}`;
    }
};
let location = {
    city: 'Boston',
    street: 'Nowhere street',
    number: 13, postalCode: 51225,
    getAddressInfo() {
        return `${this.street} ${this.number}, ${this.city}

${this.postalCode}`;
    }
};
function createCombinedFunction(names, location) {
    return function (person) {
        console.log(`Hello, ${person.getPersonInfo()} from ${person.getAddressInfo()}`);
    };
}
;
let combinedFunction = createCombinedFunction(names, location);
let combinedPerson = Object.assign({}, names, location);
combinedFunction(combinedPerson);
//# sourceMappingURL=08-TypeExtraction.js.map