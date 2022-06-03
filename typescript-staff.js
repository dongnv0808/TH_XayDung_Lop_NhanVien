"use strict";
exports.__esModule = true;
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    Object.defineProperty(Staff.prototype, "Name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Staff.prototype.setName = function (name) {
        this._name = name;
    };
    Object.defineProperty(Staff.prototype, "Email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Staff.prototype.setEmail = function (email) {
        this._email = email;
    };
    Object.defineProperty(Staff.prototype, "Age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Staff.prototype.setAge = function (age) {
        this._age = age;
    };
    return Staff;
}());
exports.Staff = Staff;
