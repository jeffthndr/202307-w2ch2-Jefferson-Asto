import { strictEqualsFunction } from "./strictEqualsFunction.js";

console.log(strictEqualsFunction(1, 1));
console.log(strictEqualsFunction(NaN, NaN));
console.log(strictEqualsFunction(0, -0));
console.log(strictEqualsFunction(-0, 0));
console.log(strictEqualsFunction(1, "1"));
console.log(strictEqualsFunction(true, false));
console.log(strictEqualsFunction(false, false));
console.log(strictEqualsFunction("water", "oil"));
