//Selectors

const firstNameDisplays = document.querySelectorAll(".user-first");
const surNameDisplays = document.querySelectorAll(".user-second");
const adressField = document.querySelector(".user-adress");
const logOutBtn = document.querySelector(".sign-out");
const editUserBtn = document.querySelector(".edit");
const doneBtn = document.querySelector(".done");
const firstNameInput = document.querySelector(".input-fname");
const surNameInput = document.querySelector(".input-sname");

let editMode = false;

function editToggler() {
    if (editMode == false) {
        editMode == true;
        toggleDisplay(doneBtn, editUserBtn);
        toggleDisplay(firstNameDisplays[1], firstNameInput);
        toggleDisplay(surNameDisplays[1], surNameInput);
    }
    if (editMode == true) {
        editMode == false;
        toggleDisplay(doneBtn, editUserBtn);
    }
}

function toggleDisplay(x, y) {
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";
    }
    if (y.style.display === "none") {
        y.style.display = "inline-block";
    } else {
        y.style.display = "none";
    }
}

editUserBtn.addEventListener('click', editToggler);
doneBtn.addEventListener('click', editToggler);