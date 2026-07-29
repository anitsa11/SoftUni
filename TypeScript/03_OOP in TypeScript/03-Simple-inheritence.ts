class Vihicle {
    brand: string;

    constructor(brand:string) {
        this.brand = brand;
    }

    drive() {
        return `Driving a ${this.brand}`
    }
}

class Car extends Vihicle {
    constructor (brand: string, public model: string) {
        super(brand);
    }

    // model: string;

    // constructor (brand: string, model: string) {
    //     super(brand);
    //     this.model = model;
    // }

    override drive() {
        return `Driving a ${this.brand} ${this.model}`
    }

}

const car = new Car("Toyota", "Corolla");
console.log(car.drive());
