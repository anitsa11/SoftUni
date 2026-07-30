"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    static productCount = 0;
    id;
    _name;
    _price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        Product.productCount++;
        this.id = Product.productCount;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length > 0) {
            this._name = value;
        }
        else {
            throw new Error('Name must contain at least 1 character');
        }
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("Price must be positive");
        }
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
class Inventory {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        return this.products.map((product) => product.getDetails()).join("\n") + `\nTotal products created:${this.products.length}`;
    }
}
const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
//# sourceMappingURL=13-Invetory-system.js.map