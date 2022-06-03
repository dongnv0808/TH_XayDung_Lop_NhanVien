"use strict";
exports.__esModule = true;
var typescript_staff_1 = require("./typescript-staff");
var staff1 = new typescript_staff_1.Staff('Staff 1', 'abc@gmail.com', 25);
var nameStaff1 = staff1.Name;
console.log(nameStaff1);
staff1.setName('Staff 2');
var getName = staff1.Name;
console.log(getName);
