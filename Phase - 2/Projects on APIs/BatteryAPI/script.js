let batteryPercent = document.getElementById("battery-percent");
let batteryPercentT = document.getElementById("battery-percent-t");
let chargeTime = document.getElementById("charge-time");
let dischargeTime = document.getElementById("discharge-time");
let powerSource = document.getElementById("powerSource");
let batteryIndicator = document.getElementById("battery-lvl");

navigator.getBattery().then(function (battery) {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", function () {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    // console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
    if (battery.charging) {
      powerSource.innerText = "Adapter";
    } else {
      powerSource.innerText = "Battery";
    }
  }

  battery.addEventListener("levelchange", function () {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    // console.log("Battery level: " + battery.level * 100 + "%");
    batteryPercent.innerText = Math.floor(battery.level * 100) + "%";
    batteryPercentT.innerText = Math.floor(battery.level * 100) + "%";
    batteryIndicator.style.width = Math.floor(battery.level * 100) + "%";
  }

  battery.addEventListener("chargingtimechange", function () {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    // console.log("Battery charging time: " + battery.chargingTime + " seconds");
    if (battery.chargingTime == "Infinity") {
      chargeTime.innerText = "---";
    } else {
      chargeTime.innerText = battery.chargingTime;
    }
  }

  battery.addEventListener("dischargingtimechange", function () {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    let dischargeH = Math.floor(battery.dischargingTime / 3600);

    let dischargeM = Math.floor((battery.dischargingTime % 3600) / 60);
    // console.log(dischargeM);
    let dischargeS = battery.dischargingTime % 60;
    // console.log(
    //   "Battery discharging time: " +
    //     dischargeH +
    //     ":" +
    //     dischargeM +
    //     ":" +
    //     dischargeS
    // );

    if (battery.dischargingTime == "Infinity") {
      dischargeTime.innerText = "---";
    } else {
      dischargeTime.innerText =
        dischargeH + ":" + dischargeM + ":" + dischargeS;
    }
  }
});
