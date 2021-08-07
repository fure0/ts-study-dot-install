// Generics

// function getStringArray(value: string): string[] {
//     return [value, value, value];
// }
// function getNumberArray(value: number): number[] {
//     return [value, value, value];
// }

function getArray<T>(value: T): T[] {
    return [value, value, value];
}

console.log(getArray<number>(3));
console.log(getArray<string>("hello"));