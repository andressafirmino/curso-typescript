function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

const resultMult = multiply(1, 3);
console.log(resultMult);

function sum(num1: number, num2: number): number {
    return num1 * num2;
}

const resultSum = sum(1, 3);
console.log(resultSum);

function isEven(num: number): boolean {
    return num % 2 === 0;
}

const resultEven = isEven(3);
console.log(resultEven);

function showResult(result: number): void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's not even!`);
    }
}

const resultShow = showResult(4);
