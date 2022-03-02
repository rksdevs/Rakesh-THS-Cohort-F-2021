// var today = new Date();
// today.getSeconds();
// console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);

// let hour = today.getHours().toFixed(2);
// let min = today.getMinutes().toFixed(2);
// let sec = today.getSeconds().toFixed(2);

// function gettingSeconds() {
//   var today = new Date();
//   console.log(today.getSeconds());
// }

// function gettingMinutes() {
//   let today = new Date();
//   console.log(today.getMinutes());
// }

// function gettingHours() {
//   let today = new Date();
//   console.log(today.getHours());
// }

// setInterval(() => {
//   let today = new Date();
//   document.getElementById("sec").innerText = today.getSeconds();
// }, 1000);

// setInterval(() => {
//   let today = new Date();
//   document.getElementById("min").innerText = today.getMinutes();
// }, 1000);

setInterval(() => {
  let today = new Date();
  document.getElementById("hour").innerText = today.getHours();
  document.getElementById("min").innerText = today.getMinutes();
  document.getElementById("sec").innerText = today.getSeconds();
}, 1000);

setInterval(() => {
  let today = new Date();
  document.getElementById("today-year").innerText = today.getFullYear();
  document.getElementById("today-month").innerText = today.getMonth();
  document.getElementById("today-day").innerText = today.getDate();
}, 1000);

// Stopwatch

let stopWatchCounter;

function watchStart() {
  let stopMs = 0;
  let stopSec = 0;
  let stopMin = 0;

  document.getElementById("stop-min").innerText = stopMin;
  document.getElementById("stop-sec").innerText = stopSec;
  document.getElementById("stop-ms").innerText = stopMs;

  stopWatchCounter = setInterval(() => {
    if (stopMs == 99) {
      stopMs = 0;
      stopSec++;
      document.getElementById("stop-sec").innerText = stopSec;
      if (stopSec == 59) {
        stopSec = 0;
        stopMin++;
        document.getElementById("stop-min").innerText = stopMin;
      }
    } else {
      stopMs++;
    }
    document.getElementById("stop-ms").innerText = stopMs;
  }, 10);
}

function watchStop() {
  clearInterval(stopWatchCounter);
}

// Timer
let timerSec = document.getElementById("timer-sec").value;
let timerMin = document.getElementById("timer-min").value;
let timerHour = document.getElementById("timer-hr").value;
let timerCounter;
let tEnd = document.getElementById("tEnd");

function timerStart() {
  timerSec = document.getElementById("timer-sec").value;
  timerMin = document.getElementById("timer-min").value;
  timerHour = document.getElementById("timer-hr").value;
  timerCounter = setInterval(() => {
    if (
      (timerSec == 0 || timerSec == "") &&
      (timerMin == 0 || timerMin == "") &&
      (timerHour == 0 || timerHour == "")
    ) {
      // alert("Your Time Has Ended");

      tEnd.classList.toggle("timer-hidden");
      timerPause();
    } else if (timerSec == 0 && (timerMin != 0 || timerMin != "")) {
      timerSec = 59;
      if (timerMin != 0 && timerMin != "") {
        timerMin--;
        document.getElementById("timer-min").value = timerMin;
      } else {
        timerMin = 0;
      }

      if (timerMin == 0 && (timerHour != 0 || timerHour != "")) {
        timerMin = 59;
        if (timerHour != 0) {
          timerHour--;
          document.getElementById("timer-hr").value = timerHour;
        } else {
          timerHour = 0;
        }
      }
    } else {
      timerSec--;
    }
    document.getElementById("timer-sec").value = timerSec;
  }, 1000);
}

function timerPause() {
  clearInterval(timerCounter);
}

function timerReset() {
  tEnd.classList.toggle("timer-hidden");
  document.getElementById("timer-sec").value = 0;
  document.getElementById("timer-min").value = 0;
  document.getElementById("timer-hr").value = 0;
}
