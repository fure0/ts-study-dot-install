// クラス
// public, protected, private
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var User2 = (function () {
    function User2(_name) {
        this._name = _name;
    }
    User2.prototype.sayHi = function () {
        console.log("hi! i am " + this._name);
    };
    return User2;
})();
var AdminUser = (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(_name, _age) {
        _super.call(this, _name);
        this._age = _age;
    }
    AdminUser.prototype.sayHi = function () {
        console.log("my age: " + this._age);
        console.log("my name: " + this._name);
        _super.prototype.sayHi.call(this);
    };
    return AdminUser;
})(User2);
var bob = new AdminUser("Bob", 23);
bob.sayHi();
