"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _username;
    constructor(_username) {
        this._username = _username;
        this.username = _username;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        if (value.length < 3) {
            throw new Error("Error: Username must be at least 3 characters long");
        }
        this._username = value;
    }
}
const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);
// const user = new User("Martin");
// user.username = "Do";
//# sourceMappingURL=10-Getters-and-Setters.js.map