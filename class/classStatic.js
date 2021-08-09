// クラス
// 静的メンバ
var User3 = (function () {
    function User3(name) {
        this.name = name;
        User3.count++;
    }
    User3.prototype.sayHi = function () {
        console.log("hi! i am " + this.name);
    };
    User3.showDescription = function () {
        console.log("this class is about users");
    };
    User3.count = 0;
    return User3;
})();
var tom = new User3("Tom");
var bob = new User3("Bob");
console.log(User3.count);
User3.showDescription();
