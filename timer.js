const secondDisplay = document.querySelector(".second");
const minuteDisplay = document.querySelector(".minute");
let isRunning = false;

let startTime;
let endTime;

function getTimes() {
    startTime = new Date();
    startTime.getTime();
    console.log(startTime);
}

getTimes();