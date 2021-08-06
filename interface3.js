// Interface -> Class
var User2 = (function () {
    function User2(name) {
        this.score = 0;
        this.name = name;
    }
    User2.prototype.sayHi = function () {
        console.log("hi! i am " + this.name);
    };
    User2.prototype.showScore = function () {
        console.log("score " + this.score);
    };
    return User2;
})();
var user = new User2("tony");
console.log(user.showScore());
