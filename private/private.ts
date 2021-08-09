// クラス
// public, protected, private
// tsc private.ts -t ES5

class User2 {
    constructor(private _name: string) {
    }
    public sayHi(): void {
        console.log("hi! i am " + this._name);
    }
    get name() {
        return this._name;
    }
    set name(newValue: string) {
        this._name = newValue;
    }
}

var tony = new User2("tony");
console.log(tony.name);
tony.name = "TONY";
console.log(tony.name);
tony.sayHi();