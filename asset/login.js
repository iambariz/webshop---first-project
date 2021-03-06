userInput = document.querySelector("#userName");
userPw = document.querySelector("#password");
errorMsg = document.querySelector(".error-msg");
loginButton = document.querySelector(".btn-login");

/*Moved somewhere else
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
*/
function checkUser() {
    let userNames = getUserStorage();
    for (let i = 0; i < userNames.length; i++) {
        if (userNames[i].userName == userInput.value &&
            userNames[i].password == userPw.value) {
            //Login comes here
            loginUser(userNames[i].userName, userNames[i].id, userNames[i].firstName, userNames[i].lastName, "Please Edit");
            redirect();
            //Optional?
            break;
        } else {
            errorMsgDisplay(errorMsg, "Invalid username / password");
        }
    }
}

loginButton.addEventListener('click', checkUser);
window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && userPw.value.length > 0 && userInput.value.length > 0) {
        checkUser();
    }
})

function redirect() {
    window.location.href = "user.html";
};