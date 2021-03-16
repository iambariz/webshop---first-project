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

let accountData = getUserStorage();

let editMode = false;
let editProblem = false;

function editToggler() {
    toggleEdit();
    if (editMode == false) {
        toggleDisplay(editUserBtn, doneBtn);
        toggleDisplay(firstNameDisplays[1], firstNameInput, );
        toggleDisplay(surNameDisplays[1], surNameInput, );
        toggleDisplay(adressField, adressInput, );
        checkLogin();
        editUser();
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
    loggedInList = loggedInUser();
    loggedInList.splice(0, 1);
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInList));
    window.location.href = "login.html";
}

function editUser() {
    checkNewName();
    if (editMode == true) {
        editCurrentUser();
        editStorage();
        location.reload();
    } else {

    }
}

function checkNewName() {
    if (firstNameInput.value.length > 1 && surNameInput.value.length > 1) {
        editMode = true;
    }
}

function editCurrentUser() {
    loggedInList = loggedInUser();
    loggedInList[0].firstName = firstNameInput.value;
    loggedInList[0].lastName = surNameInput.value;
    loggedInList[0].adress = adressInput.value;
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInList));
}

function editStorage() {
    index = getCurrentId();
    accountData[index].firstName = firstNameInput.value;
    accountData[index].lastName = surNameInput.value;
    accountData[index].adress = adressInput.value;
    localStorage.setItem("userNames", JSON.stringify(accountData));
}

function getCurrentId() {
    for (let i = 0; i < accountData.length; i++) {
        const currentName = accountData[i].userName;
        if (currentName == loggedInList[0].userName) {
            return i;
        }
    }
}

window.addEventListener('load', displayName);
editUserBtn.addEventListener('click', editToggler);
doneBtn.addEventListener('click', editToggler);
logOutBtn.addEventListener('click', logOut);