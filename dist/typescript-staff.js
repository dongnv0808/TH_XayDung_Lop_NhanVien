"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
class Staff {
    constructor(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    get Name() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    get Email() {
        return this._email;
    }
    setEmail(email) {
        this._email = email;
    }
    get Age() {
        return this._age;
    }
    setAge(age) {
        this._age = age;
    }
}
exports.Staff = Staff;
