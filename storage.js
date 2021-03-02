//Storage items

window.addEventListener("DOMContentLoaded", function () {
    displayStorageItems();
    startStorageTime();
    adminSetup();
    updateTotal(getLocalStorage());
    //checkActive();
})


function getLocalStorage() {
    return localStorage.getItem("list") ?
        JSON.parse(localStorage.getItem('list')) : [];
}

function addToLocalStorage(id, title, quantity, unitPrice) {
    const item = {
        id,
        title,
        quantity,
        unitPrice,
        price: quantity * unitPrice,
    }
    let storageItems = getLocalStorage();
    storageItems.push(item);
    localStorage.setItem("list", JSON.stringify(storageItems));
}

function displayStorageItems() {
    let storageItems = getLocalStorage();
    basketDisplay(storageItems);
    barDisplay();
    updateTotal(basketItems);
}




//Storage time

function getTimeStorage() {
    return localStorage.getItem("timeData") ?
        JSON.parse(localStorage.getItem('timeData')) : [];
}

function saveTime(startTime, endTime) {
    const time = {
        startTime,
        endTime,
        timeLeft,
    }
    let timeStorage = getTimeStorage();
    timeStorage.push(time);
    //   console.log(timeStorage);
    localStorage.setItem("timeData", JSON.stringify(timeStorage));
}
//If statement checks if the new start time is greater than the previous
//end needs to be added
function loadTimer() {
    let timeStorage = getTimeStorage();
    startTime = new Date().getTime();
    // console.log(startTime)
    timeLeft = parseInt(timeStorage[0].endTime) - parseInt(startTime);
    timeLeft = Math.floor(timeLeft);
    if (timeLeft > 0) {
        //console.log(`The timeleft is: ${timeLeft}`);
        isRunning = true;
        startTimer();
        setTimeout(function () {
            displayTimer();
        }, 1000);
    } else {
        errorMsg();
    }

}


function startStorageTime() {
    let timeStorage = getTimeStorage();
    if (timeStorage.length < 1) {
        //  console.log("empty");
    } else {
        loadTimer();
    }
}

function deleteBasket() {
    localStorage.clear();
}

//User script 

function getUserStorage() {
    return localStorage.getItem("userNames") ?
        JSON.parse(localStorage.getItem('userNames')) : []
}

function adminSetup() {
    let accountData = getUserStorage();
    if (accountData.length == 0) {
        const admin = {
            userName: "Admin",
            password: "Admin",
            id: 0,
        }
        accountData.push(admin);
        localStorage.setItem("userNames", JSON.stringify(accountData));
        //console.log(accountData);
    }
}

//Store the logged in user's data.
//However, it's not the efficent way, it'll do for testing only

function loggedInUser() {
    return localStorage.getItem("loggedInUser") ?
        JSON.parse(localStorage.getItem('loggedInUser')) : []
}

function loginUser(name, id, time) {
    loggedInList = loggedInUser();
    const activeUser = {
        userName: name,
        id: id,
        time: time,
    }
    loggedInList[0] = activeUser;
    console.log(loggedInList);
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInList));
}




/*
Old functions
*/

/*
function removeFromLocalStorage(id) {
    let storageItems = getLocalStorage();
    console.log(id);
    storageItems = storageItems.filter(function (item) {
        console.log(item);
        if (parseInt(id) != parseInt(item.id)) {
            return item;
        } else {
            console.log("else");
        }
    })
    console.log(storageItems)
    localStorage.setItem("list", JSON.stringify(storageItems));
}
*/