// Generics
// function getStringArray(value: string): string[] {
//     return [value, value, value];
// }
// function getNumberArray(value: number): number[] {
//     return [value, value, value];
// }
function getArray(value) {
    return [value, value, value];
}
console.log(getArray(3));
console.log(getArray("hello"));
