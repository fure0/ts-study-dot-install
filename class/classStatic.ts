// クラス
// 静的メンバ

class User3 {
    name: string;
    constructor(name: string) {
        this.name = name;
        User3.count++;
    }
    sayHi(): void {
        console.log("hi! i am " + this.name);
    }
    static count: number = 0;
    static showDescription(): void {
        console.log("this class is about users");
    }
}

var tom = new User3("Tom");
var bob = new User3("Bob");
console.log(User3.count);
User3.showDescription();