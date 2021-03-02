loginMenu = document.querySelector(".login");
userDisplay = document.querySelector(".userName");

function checkLogin() {
    loggedInList = loggedInUser();
    if (loggedInList[0].loggedIn == false) {
        loginMenu.style.display = "inline";
        userDisplay.style.display = "none";
    }
    if (loggedInList[0].loggedIn == true) {
        loginMenu.style.display = "none";
        userDisplay.style.display = "inline";
        userDisplay.children[0].textContent = loggedInList[0].firstName + " " + loggedInList[0].lastName;
        console.log(loggedInList[0].firstName)
    }
}

checkLogin()