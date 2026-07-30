"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function conditionalNumber(param) {
    console.log(typeof param === "number" ? param.toFixed(2) : param);
}
conditionalNumber(20.3555);
conditionalNumber('wow');
conditionalNumber('a string');
// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');
//# sourceMappingURL=04-Conditional-number.js.map