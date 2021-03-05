const loginMenu = document.querySelector(".login");
const userDisplay = document.querySelector(".userName");
const navBar = document.querySelector(".nav");
const closeNav = document.querySelector(".fas.fa-times-circle");
const openNav = document.querySelector(".fas.fa-bars");


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


checkLogin()