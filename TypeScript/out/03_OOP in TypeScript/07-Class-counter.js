"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    static count = 0;
    static increment() {
        Counter.count++;
    }
    static getCount() {
        return Counter.count;
    }
}
Counter.increment();
Counter.increment();
console.log(Counter.getCount());
//# sourceMappingURL=07-Class-counter.js.map