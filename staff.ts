import { Staff } from "./typescript-staff";

let staff1 = new Staff('Staff 1', 'abc@gmail.com', 25);

let nameStaff1 = staff1.Name;

console.log(nameStaff1);

staff1.setName('Staff 2');
let getName = staff1.Name;

console.log(getName);