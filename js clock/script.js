let secondsHand = document.querySelector(".seconds-hand");
let minsHand = document.querySelector(".mins-hand");
let hoursHand = document.querySelector(".hours-hand");

function clock() {
const now = new Date();

const seconds = now.getSeconds();

const secondsDegree = (seconds / 60) * 360 + 90;

secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

const minuets = now.getMinutes();

const minsDegree = (minuets / 60) * 360 + 90;

minsHand.style.transform = `rotate(${minsDegree}deg)`;

const hours = now.getMinutes();

const hoursDegree = (hours / 12) * 360 + 90;

hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(clock, 1000);
