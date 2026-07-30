"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CountedSet {
    dict = new Map();
    add(item) {
        this.dict.set(item, (this.dict.get(item) || 0) + 1);
    }
    remove(item) {
        if (this.dict.has(item) && this.dict.get(item) > 0) {
            this.dict.set(item, this.dict.get(item) - 1);
        }
    }
    getNumberOfCopies(item) {
        return this.dict.get(item) || 0;
    }
    contains(item) {
        return this.getNumberOfCopies(item) > 0;
    }
}
let countedSet = new CountedSet();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.contains('test'));
console.log(countedSet.getNumberOfCopies('test'));
countedSet.remove('test');
countedSet.remove('test');
countedSet.remove('test');
console.log(countedSet.getNumberOfCopies('test'));
console.log(countedSet.contains('test'));
//# sourceMappingURL=02-Countable-interface.js.map