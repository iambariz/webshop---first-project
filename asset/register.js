//Selectors
const userField = document.querySelector('#userName-Reg');
const pwField = document.querySelector('#password-Reg');
const firstNameField = document.querySelector('#firstName-Reg');
const surNameField = document.querySelector('#surName-Reg');
const emailField = document.querySelector('#email-Reg');
const testField = document.querySelector('#robot-test');
const errorFieldReg = document.querySelector('.error-msg-reg');

const regBtn = document.querySelector('.btn-register');
const firstNum = document.querySelector('.first-num');
const secondNum = document.querySelector('.second-num');
const operator = document.querySelector('.operator');

const operators = ["*", "-", "+"];
let toSolve = [];
let passedTest = false;
let duplicateUser = false;
let dataProblem = false;
let specialUsed = false;
let cpuResult = getResult();
let accountData = getUserStorage();



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
    connected = eval(connected);
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

function duplicateUserCheck(newUser) {
    for (let i = 0; i < accountData.length; i++) {
        const currentName = accountData[i].userName;
        if (currentName == newUser) {
            duplicateUser = true;
            break;
        }
    }
}

function checkReq() {
    let newUser;
    let newPw;
    if (pwField.value.length > 6) {
        newPw = pwField.value;
    } else {
        dataProblem = true;
    }
    if (userField.value.length > 5) {
        newUser = userField.value
    } else {
        dataProblem = true;
    }

    checkResult();
    duplicateUserCheck(newUser);
    checkUserName(newUser);
    if (passedTest == true && duplicateUser == false && dataProblem == false && specialUsed == false) {
        const user = {
            userName: newUser,
            firstName: firstNameField.value,
            lastName: surNameField.value,
            email: emailField.value,
            password: newPw,
            id: new Date().getTime(),
        }
        console.log("Passed")
        accountData.push(user);
        localStorage.setItem("userNames", JSON.stringify(accountData));
        window.location.reload();
    } else {
        decideError();
    }
}

function checkUserName(username) {
    var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //unacceptable chars
    if (pattern.test(username)) {
        specialUsed = true;
    }
    specialUsed = false;
}

function decideError() {
    if (passedTest == false) {
        errorMsgDisplay(errorFieldReg, "Test check failed", 2000)
    } else if (duplicateUser == true) {
        errorMsgDisplay(errorFieldReg, "Username already exists", 2000)
    } else if (dataProblem == true) {
        errorMsgDisplay(errorFieldReg, "User / PW too short", 2000)
    } else if (specialUsed == true) {
        errorMsgDisplay(errorFieldReg, "Special characters are not allowed", 2000)
    }
}

regBtn.addEventListener('click', checkReq);