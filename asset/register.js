//Selectors
const userField = document.querySelector('#userName-Reg');
const pwField = document.querySelector('#password-Reg');
const regBtn = document.querySelector('.btn-register');
const firstNum = document.querySelector('.first-num');
const secondNum = document.querySelector('.second-num');
const operator = document.querySelector('.operator');
const testField = document.querySelector('#robot-test');

const operators = ["*", "-", "+"];
let toSolve = [];
let passedTest = false;
let cpuResult = getResult();


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getResult() {
    let firstRandom = getRandom(4, 10);
    let secondRandom = getRandom(1, 4);
    let operatorRandom = operators[getRandom(0, 3)];
    updateDisplays(firstRandom, operatorRandom, secondRandom);
    toSolve.push(firstRandom, operatorRandom, secondRandom);
    let connected = toSolve.join("");
    //console.log(connected)
    connected = eval(connected);
    //console.log(connected)

    return connected;
}

function updateDisplays(one, randomOperator, two) {
    firstNum.textContent = one;
    operator.textContent = randomOperator;
    secondNum.textContent = two;
}

function checkResult() {

    if (testField.value == cpuResult) {
        passedTest = true;
    } else {
        //Error msg - failed authorasation
    }

}

function checkReq() {
    let newUser;
    let newPw;
    if (pwField.length > 6) {
        newPw = pwField.value;
    } else {
        //Error msg - password
    }
    if (userField.length > 6) {
        newUser = userField.value
    } else {
        //Error msg - password
    }
    checkResult();
    if (newUser != undefined && newPw != undefined && passedTest == true) {
        let accountData = getUserStorage();
        if (accountData.length == 0) {
            const user = {
                userName: newUser,
                firstName: " ",
                lastName: " ",
                password: newPw,
                id: new Date.getTime(),
            }
            console.log(user)
            accountData.push(user);
            localStorage.setItem("userNames", JSON.stringify(accountData));
        }
        console.log("Succes");
    }
    console.log("bum")
}

regBtn.addEventListener('click', checkReq);