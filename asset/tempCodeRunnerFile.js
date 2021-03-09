const operators = ["*", "-", "+"];
let toSolve = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getResult() {
    let firsRandom = getRandom(0, 100);
    let secondNum = getRandom(0, 100);
    let operator = operators[getRandom(0, toSolve.length)];
    toSolve.push(firsRandom, operator, secondNum);
    let connected = toSolve.join("");
    console.log(connected);
    console.log(eval(connected));
}

function solveIt() {
    toSolve.join("");
}

getTest()