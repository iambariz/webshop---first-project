//Storage items

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