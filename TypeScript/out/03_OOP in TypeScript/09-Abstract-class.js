"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle extends Shape {
    a;
    b;
    constructor(color, a, b) {
        super(color);
        this.a = a;
        this.b = b;
    }
    getArea() {
        return this.a * this.b;
    }
}
const circle = new Circle("red", 5);
console.log(circle.getArea());
const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());
//# sourceMappingURL=09-Abstract-class.js.map