// Normal function for addition
function add(num1,num2){
    return num1+num2;
}

const addNumbers = add(12,13);
console.log("Addition output: " + addNumbers);

// Annonymous function for multiplication
const multiply = function(num1, num2){
    return num1 * num2;
}

const multiplyResult = multiply(3,2);
console.log('Multiplication output:' + multiplyResult);

// Arrow function

const division = (num1,num2) => num1/num2;
const divisionResult = division(14,2);
console.log("Division output: " + divisionResult);
