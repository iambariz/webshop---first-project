const secondDisplay = document.querySelector(".second");
const minuteDisplay = document.querySelector(".minute");


let isRunning = false;

let startTime;
let endTime;
let timeLeft;
let minutesLeft;
let secondsLeft;

function getTimes() {
    startTime = new Date();
    endTime = new Date(startTime);
    endTime.setMinutes(startTime.getMinutes() + 30);
    startTime.getTime();
    timeLeft = endTime.getTime() - startTime.getTime();
    getMS();
}

function getMS() {
    minutesLeft = Math.floor(timeLeft / 60000);
    secondsLeft = (timeLeft - (minutesLeft * 60000)) / 1000;
    console.log(minutesLeft);
    console.log(secondsLeft);
    displayTime(minutesLeft, secondsLeft);
    timeLeft = timeLeft - 1000;
}

function displayTime(min, sec) {
    if (min < 10) {
        minuteDisplay.textContent = "0" + min;
    } else {
        minuteDisplay.textContent = min;
    }
    if (sec < 10) {
        secondDisplay.textContent = "0" + sec;
    } else {
        secondDisplay.textContent = sec;
    }
}

function myTimer() {
    console.log("works");
    if (isRunning == false) {
        isRunning = true;
        getTimes();
    }
    if (timeLeft > 0) {
        getMS()
    } else {
        stopTimer();
    }
}

let timer = setInterval(myTimer, 1000);

function stopTimer(func) {
    clearInterval(func);
}