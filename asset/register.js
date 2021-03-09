//Selectors
const userField = document.querySelector('#userName-Reg');
const pwField = document.querySelector('#password-Reg');
const firstNameField = document.querySelector('#firstName-Reg');
const surNameField = document.querySelector('#surName-Reg');
const emailField = document.querySelector('#email-Reg');
const testField = document.querySelector('#robot-test');

const regBtn = document.querySelector('.btn-register');
const firstNum = document.querySelector('.first-num');
const secondNum = document.querySelector('.second-num');
const operator = document.querySelector('.operator');

const operators = ["*", "-", "+"];
let toSolve = [];
let passedTest = false;
let cpuResult = getResult();
let duplicateUser = false;


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
    duplicateUserCheck(newUser);

    if (newUser != undefined && newPw != undefined && passedTest == true && duplicateUser == false) {
        let accountData = getUserStorage();
        const user = {
            userName: newUser,
            firstName: " ",
            lastName: " ",
            password: newPw,
            id: new Date.getTime(),
        }
        accountData.push(user);
        localStorage.setItem("userNames", JSON.stringify(accountData));
    }
}

regBtn.addEventListener('click', checkReq);