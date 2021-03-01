userInput = document.querySelector("#userName");
userPw = document.querySelector("#password");
errorMsg = document.querySelector(".error-msg");
loginButton = document.querySelector(".btn-login");


function errorMsgDisplay() {
    errorMsg.textContent = "Invalid username / password"
}

function clearMsg() {
    setTimeout(function () {
        errorMsg.style.opacity = 0;
    }, 1000);
    setTimeout(function () {
        errorMsg.textContent = "";
    }, 2000);
    setTimeout(function () {
        errorMsg.style.opacity = 1;
    }, 2000);
}

function checkUser() {
    let userNames = getUserStorage();
    for (let i = 0; i < userNames.length; i++) {
        if (userNames[i].userName == userInput.value &&
            userNames[i].userName == userPw.value) {
            //Login comes here
            break;
        } else {
            errorMsgDisplay();
            clearMsg();
        }
    }
}

loginButton.addEventListener('click', checkUser);