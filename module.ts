// 内部モジュール

// module UserModule {
//     export var name = "taguchi";
//     export module AddressModule {
//         export var zip = "111-1111";
//     }
// }

/// <reference path="./user.ts" />
//module.ts를 컴파일 했을 때, user.ts도 컴파일 된다.
// 컴파일 해도, module.js, user.js가 될뿐이니,
// 두 파일을 합치고 싶을 때는 옵션 을 붙인다 tsc module.ts --out all.js


console.log(UserModule.name);
// console.log(UserModule.AddressModule.zip);

import addr = UserModule.AddressModule;
console.log(addr.zip);