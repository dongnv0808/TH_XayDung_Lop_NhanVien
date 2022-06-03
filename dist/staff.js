"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_staff_1 = require("./typescript-staff");
let staff1 = new typescript_staff_1.Staff('Staff 1', 'abc@gmail.com', 25);
let nameStaff1 = staff1.Name;
console.log(nameStaff1);
staff1.setName('Staff 2');
let getName = staff1.Name;
console.log(getName);
