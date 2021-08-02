// クラス
// public, protected, private
// tsc private.ts -t ES5
var User2 = (function () {
    function User2(_name) {
        this._name = _name;
    }
    User2.prototype.sayHi = function () {
        console.log("hi! i am " + this._name);
    };
    Object.defineProperty(User2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newValue) {
            this._name = newValue;
        },
        enumerable: true,
        configurable: true
    });
    return User2;
})();
var tony = new User2("tony");
console.log(tony.name);
tony.name = "TONY";
console.log(tony.name);
tony.sayHi();
