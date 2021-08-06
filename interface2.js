// Interface
// function getTotal2(result: FinalResult) {
//     return result.a + result.b + result.final;
// }
function getTotal2(result2) {
    if (result2.final) {
        return result2.a + result2.b + result2.final;
    }
    else {
        return result2.a + result2.b;
    }
}
// var result2 = {
//     a: 32,
//     b: 58,
//     final: 82
// };
var result2 = {
    a: 32,
    b: 58
};
console.log(getTotal2(result2));
