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
    let secondNum = getRandom(0, 4);
    let operator = operators[getRandom(0, 3)];
    toSolve.push(firsRandom, operator, secondNum);
    let connected = toSolve.join("");
    connected = eval(connected);
}

getResult()