"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function httpCodes(param) {
    switch (param.code) {
        case 200:
        case 201:
        case 301:
            console.log(param.text);
            break;
        case 400:
        case 404:
        case 500:
            console.log(param.text.slice(0, param.printChars));
            break;
    }
}
httpCodes({ code: 200, text: 'OK' });
httpCodes({ code: 400, text: 'Bad Request', printChars: 4 });
httpCodes({ code: 404, text: 'Not Found' });
httpCodes({ code: 404, text: 'Not Found', printChars: 3 });
//# sourceMappingURL=06-httpCodes.js.map