"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function customTypeGuard(parameter) {
    return (Array.isArray(parameter)
        && parameter.length > 0
        && parameter.every((el) => typeof el === "string"));
}
console.log(customTypeGuard({}));
console.log(customTypeGuard({ test: 'one' }));
console.log(customTypeGuard(['a', 'b', 'c']));
//# sourceMappingURL=06_CustomTypeGuard.js.map