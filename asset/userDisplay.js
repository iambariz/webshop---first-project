//Selectors

const firstNameDisplays = document.querySelectorAll(".user-first");
const surNameDisplays = document.querySelectorAll(".user-second");
const adressField = document.querySelector(".user-adress");
const logOutBtn = document.querySelector(".sign-out");
const editUserBtn = document.querySelector(".edit");
const doneBtn = document.querySelector(".done");

let editMode = false;

function editToggler() {
    if (editMode == false) {
        editMode == true;
        toggleDisplay(doneBtn, editUserBtn);
    }
    if (editMode == true) {
        editMode == false;
        toggleDisplay(doneBtn, editUserBtn);
    }
}

function toggleDisplay(x, y) {
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

editUserBtn.addEventListener('click', editToggler);
doneBtn.addEventListener('click', editToggler);