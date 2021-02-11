function getLocalStorage() {
    return localStorage.getItem("list") ?
        JSON.parse(localStorage.getItem('list')) : [];
}

function addToLocalStorage(id, title, quantity, price) {
    const item = {
        id,
        title,
        quantity,
        price,
    }
    let storageItems = getLocalStorage();
    storageItems.push(item);
    localStorage.setItem("list", JSON.stringify(storageItems));
}

function removeFromLocalStorage(id) {
    let storageItems = getLocalStorage();
    console.log(typeof (id));
    storageItems = storageItems.filter(function (item) {
        if (parseInt(item.id) != parseInt(item.id)) {
            return item;
        }
    })
    localStorage.setItem("list", JSON.stringify(storageItems));
}

function displayStorageItems() {
    let storageItems = getLocalStorage();
    if (storageItems.length > 0) {
        storageItems.forEach(function (item) {
            basketItems.push(item);
        });
        basketDisplay(storageItems);
        barDisplay();
        updateTotal(basketItems);
    }
}

function getTimeStorage() {
    return localStorage.getItem("timeData") ?
        JSON.parse(localStorage.getItem('timeData')) : [];
}

function saveTime(startTime, endTime) {
    const time = {
        startTime,
        endTime,
    }
    let timeStorage = getTimeStorage();
    timeStorage.push(time);
    //   console.log(timeStorage);
    localStorage.setItem("timeData", JSON.stringify(timeStorage));
}

function loadTimer() {
    let timeStorage = getTimeStorage();
    timeLeft = parseInt(timeStorage[0].endTime) - parseInt(timeStorage[0].startTime);
    //  console.log(timeStorage[0].endTime);
}


function startStorageTime() {
    let timeStorage = getTimeStorage();
    if (timeStorage.length < 1) {
        startTimer();
    } else {
        loadTimer();
    }
}
/*
If current time is greater then the end time delete
function deleteTime() {

}

*/