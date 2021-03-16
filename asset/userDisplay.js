//Selectors

const firstNameDisplays = document.querySelectorAll(".user-first");
const surNameDisplays = document.querySelectorAll(".user-second");
const adressField = document.querySelector(".user-adress");
const logOutBtn = document.querySelector(".sign-out");
const editUserBtn = document.querySelector(".edit");
const doneBtn = document.querySelector(".done");
const firstNameInput = document.querySelector(".input-fname");
const surNameInput = document.querySelector(".input-sname");
const adressInput = document.querySelector(".input-adress");

let editMode = false;

function editToggler() {
    toggleEdit();
    if (editMode == false) {
        toggleDisplay(editUserBtn, doneBtn);
        toggleDisplay(firstNameDisplays[1], firstNameInput, );
        toggleDisplay(surNameDisplays[1], surNameInput, );
        toggleDisplay(adressField, adressInput, );
        checkLogin();
    }
    if (editMode == true) {
        toggleDisplay(doneBtn, editUserBtn, );
        toggleDisplay(firstNameInput, firstNameDisplays[1], );
        toggleDisplay(surNameInput, surNameDisplays[1], );
        toggleDisplay(adressInput, adressField, );
        checkLogin();
        displayName();
        addValue();
    }
}

function toggleDisplay(x, y) {
    if (x.style.display == "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";
    }
    if (y.style.display == "none") {
        y.style.display = "inline-block";
    } else {
        y.style.display = "none";
    }
}

function displayName() {
    loggedInList = loggedInUser();
    firstNameDisplays.forEach(function (e) {
        e.textContent = loggedInList[0].firstName
    })
    surNameDisplays.forEach(function (e) {
        e.textContent = loggedInList[0].lastName
    })
}

function toggleEdit() {
    if (editMode == true) {
        editMode = false;
    } else {
        editMode = true;
    }
}

function addValue() {
    firstNameInput.value = firstNameDisplays[0].textContent;
    surNameInput.value = surNameDisplays[0].textContent;
    adressInput.value = adressField.textContent;
}

function logOut() {
    console.log(loggedInList);
    loggedInList = loggedInUser();
    console.log(loggedInList);
    loggedInList.splice(0, 1);
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInList));
    window.location.href = "login.html";
}

function editUser() {

}

window.addEventListener('load', displayName);
editUserBtn.addEventListener('click', editToggler);
doneBtn.addEventListener('click', editToggler);
logOutBtn.addEventListener('click', logOut);