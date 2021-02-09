const secondDisplay = document.querySelector(".second");
const minuteDisplay = document.querySelector(".minute");
let isRunning = false;

let startTime;
let endTime;
let timeLeft

function getTimes() {
    isRunning = true;
    startTime = new Date();
    startTime.getTime();
    endTime = new Date(startTime);
    endtime = endTime.setMinutes(endTime.getMinutes() + 30);
}

getTimes();