// 外部モジュール

// Node - CommonJS
// RequireJS - AMD

// module UserModule {
//     export var name = "taguchi";
// }

// tsc external_module.ts -m commonjs
//import User = require("./user_commonjs");

// tsc external_module.ts -m amd
import User = require("./user_amd");

console.log(User.name);