//Selectors below
//Siderbar
const basketList = document.querySelector(".basketList");
const totalDisplay = document.querySelector(".total-price-holder");
const sideBar = document.querySelector(".sidebar");
const collapse = document.querySelector(".fa-chevron-circle-right");
const open = document.querySelector(".fa-chevron-circle-left");
const basketItems = [];
//Timer
const secondDisplay = document.querySelector(".second");
const minuteDisplay = document.querySelector(".minute");
const timeDisplay = document.querySelector(".time-bar");
//Login
const loginMenu = document.querySelector(".login");
const userDisplay = document.querySelector(".userName");
const navBar = document.querySelector(".nav");
const closeNav = document.querySelector(".fas.fa-times-circle");
const openNav = document.querySelector(".fas.fa-bars");


//Variables
let isRunning = false;
let startTime;
let endTime;
let timeLeft;
let minutesLeft;
let secondsLeft;
let timer;

//DOM LOADS
window.addEventListener("DOMContentLoaded", function () {
    displayStorageItems(); //Display items in the list
    startStorageTime(); //Start the timer
    adminSetup(); //Setup for admin PW
    updateTotal(getLocalStorage()); //Updates total quantity
    checkLogin(); //Check for login
    //checkActive();
})