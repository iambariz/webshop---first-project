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

function getTest() {
    firsRandom = getRandom();
    secondNum = getRandom();
    operator = getRandom(0, operator.length);
    toSolve.push(firsRandom, operator, secondNum);
}

regBtn.addEventListener('click', )