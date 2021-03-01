userInput = document.querySelector("#userName");
userPw = document.querySelector("#password");
errorMsg = document.querySelector(".error-msg");
loginButton = document.querySelector(".btn-login");


function updateMsg() {

}

function checkUser() {
    let userNames = getUserStorage();
    for (let i = 0; i < userNames.length; i++) {
        if (userNames[i].userName == userInput.value &&
            userNames[i].userName == userPw.value) {
            //Login comes here
            break;
        }
    }
}

loginButton.addEventListener('click', checkUser);