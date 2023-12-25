const numbers = [8,6,3,4,5];
let result = [];
let mulResult = [];
const multiplyNumbers = (number) => number * 2;

mulResult = numbers.map(multiplyNumbers);
console.log(mulResult);
