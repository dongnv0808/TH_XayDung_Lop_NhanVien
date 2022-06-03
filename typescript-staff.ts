export class Staff{
    private _name: string;
    private _email: string;
    private _age: number;
    constructor(name: string, email: string, age: number){
        this._name = name;
        this._email = email;
        this._age = age;
    }
    get Name(){
        return this._name;   
    }
    setName(name: string): void {
        this._name = name;
    }
    get Email(){
        return this._email;
    }
    setEmail(email: string): void {
        this._email = email;
    }
    get Age(){
        return this._age;
    }
    setAge(age: number): void {
        this._age = age;
    }
}