"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vihicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        return `Driving a ${this.brand}`;
    }
}
class Car extends Vihicle {
    model;
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
}
const car = new Car("Toyota", "Corolla");
//# sourceMappingURL=03-Simple-inheritence.js.map