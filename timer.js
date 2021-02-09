const secondDisplay = document.querySelector(".second");
const minuteDisplay = document.querySelector(".minute");
let isRunning = false;

let startTime;
let endTime;
let timeLeft;
let minutesLeft;
let secondsLeft;

function getTimes() {
    isRunning = true;
    startTime = new Date();
    startTime.getTime();
    endTime = new Date(startTime);
    endtime = endTime.setMinutes(endTime.getMinutes() + 30);
}

function getMS() {
    timeLeft = endTime.getTime() - startTime.getTime();
    console.log(timeLeft);
    minutesLeft = Math.floor(timeLeft / 60000);
    secondsLeft = (timeLeft - (minutesLeft * 60000));
    console.log(minutesLeft);
    displayTime(minutesLeft, secondsLeft);
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

getTimes();
getMS();