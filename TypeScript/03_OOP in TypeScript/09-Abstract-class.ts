abstract class Shape {
    color: string;

    constructor(color:string) {
        this.color = color;
    }

    abstract getArea(): number;
}

class Circle extends Shape {
    
    constructor(color: string, public radius: number) {
        super(color);
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius,2);
    }
}

class Rectangle extends Shape {
    constructor(color: string, public a: number, public b: number) {
        super (color)
    }

    getArea(): number {
        return this.a*this.b;
    }
}

const circle = new Circle("red", 5);
console.log(circle.getArea());
const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());
