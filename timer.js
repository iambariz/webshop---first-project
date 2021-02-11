//Selectors
const secondDisplay = document.querySelector(".second");
const minuteDisplay = document.querySelector(".minute");
const timeDisplay = document.querySelector(".time-bar");


//Variables
let isRunning = false;
let startTime;
let endTime;
let timeLeft;
let minutesLeft;
let secondsLeft;
let timer;

//Get time values
function getTimes() {
    startTime = new Date();
    endTime = new Date(startTime);
    endTime.setMinutes(startTime.getMinutes() + 30);
    startTime.getTime();
    timeLeft = endTime.getTime() - startTime.getTime();
    saveTime(startTime, endTime);
    getMS();
}

//Converting
function getMS() {
    minutesLeft = Math.floor(timeLeft / 60000);
    secondsLeft = (timeLeft - (minutesLeft * 60000)) / 1000;
    displayTime(minutesLeft, secondsLeft);
    timeLeft = timeLeft - 1000;
}

//Display
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

//Function if time is up
function myTimer() {
    if (isRunning == false) {
        isRunning = true;
        displayTimer();
        getTimes();
    } else {

    }
    if (timeLeft > 0) {
        getMS()
    } else {
        stopTimer();
    }
}

//Start & stop
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    displayTimer();
    minuteDisplay.textContent = "30";
    secondDisplay.textContent = "00";
}

function startTimer() {
    timer = setInterval(myTimer, 1000);
}

function displayTimer() {
    if (isRunning == true) {
        timeDisplay.style.visibility = 'visible';
        timeDisplay.style.opacity = '1';
    } else {
        timeDisplay.style.visibility = 'hidden';
        timeDisplay.style.opacity = '0';
    }
}