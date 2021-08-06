// Interface -> Class

interface GameUser {
    score: number;
    showScore(): void;
}

class User2 implements GameUser {
    name: string;
    score: number = 0;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): void {
        console.log("hi! i am " + this.name);
    }
    showScore(): void {
        console.log("score " + this.score);
    }
}

var user = new User2("tony");

console.log(user.showScore());