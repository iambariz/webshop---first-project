//Selectors
const userField = document.querySelector('.userName-Reg');
const pwField = document.querySelector('.password-Reg');
const regBtn = document.querySelector('.btn-register');
const firstNum = document.querySelector('.first-num');
const secondNum = document.querySelector('.second-num');
const operator = document.querySelector('.operator');

const operators = ["*", "-", "+"];
let toSolve = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getResult() {
    let firsRandom = getRandom(4, 10);
    let secondRandom = getRandom(1, 4);
    let operatorRandom = operators[getRandom(0, 3)];
    console.log(operatorRandom)
    updateDisplays(firsRandom, operatorRandom, secondRandom);
    toSolve.push(firsRandom, operatorRandom, secondRandom);
    let connected = toSolve.join("");
    connected = eval(connected);
    console.log(connected)
    return connected;
}

function updateDisplays(one, randomOperator, two) {
    firstNum.textContent = one;
    operator.textContent = randomOperator;
    secondNum.textContent = two;
}

getResult()