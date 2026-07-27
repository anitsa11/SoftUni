"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function operator(param, operation, operand) {
    switch (operation) {
        case "Index":
            if (typeof param !== "number")
                return param[operand];
            break;
        case "Length":
            if (typeof param !== "number")
                return param.length % operand;
            break;
        case "Add":
            if (!Array.isArray(param))
                return Number(param) + operand;
            break;
    }
}
console.log(operator(['First', 'Second', 'Third'], 'Index', 1));
console.log(operator('string', 'Index', 1));
console.log(operator(['Just', 'Two'], 'Length', 5));
console.log(operator('7', 'Add', 3));
//# sourceMappingURL=04-Operator.js.map