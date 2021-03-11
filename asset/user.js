//REPAIR LATER !! IT HAS TO BE UNDEFENIED
function checkLogin() {
    loggedInList = loggedInUser();
    if (loggedInList.length > 0) {
        loginMenu.style.display = "none";
        userDisplay.style.display = "inline";
        userDisplay.children[0].textContent = loggedInList[0].firstName + " " + loggedInList[0].lastName;
        console.log(loggedInList[0].firstName)
    } else {
        loginMenu.style.display = "inline";
        userDisplay.style.display = "none";
    }
}

openNav.addEventListener('click', function () {
    navBar.classList.add("open");
    closeNav.classList.add("open");
})

closeNav.addEventListener('click', function () {
    navBar.classList.remove("open");
    closeNav.classList.remove("open");
})


function errorMsgDisplay(field, msg, time = 1000) {
    field.textContent = msg;
    clearMsg(field, time);
}

function clearMsg(field, time) {
    setTimeout(function () {
        field.style.opacity = 1;
    }, time);
    setTimeout(function () {
        field.style.opacity = 0;
    }, time + 1000);
    setTimeout(function () {
        field.textContent = "";
    }, time + 1800);
}