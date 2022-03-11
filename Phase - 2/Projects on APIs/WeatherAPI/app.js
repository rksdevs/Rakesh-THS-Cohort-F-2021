// import readline from "readline-sync";
// import axios from "axios";
// import fs from "fs";

require("dotenv").config();
const fs = require("fs");
const readline = require("readline-sync");
const axios = require("axios");

let input = readline.question("Enter the name of the city: ");
let weatherData = "";
let newWeatherObj = "";
let now = Date.now();

const read = (fileName) => {
  return new Promise((res, rej) => {
    fs.readFile(fileName, "utf-8", (data, err) => {
      if (err) {
        return rej(err);
      } else {
        // res(data);
      }
    });
  });
};

const write = (fileName, dataToWrite) => {
  return new Promise((res, rej) => {
    fs.writeFile(fileName, dataToWrite, (err) => {
      if (err) {
        rej(err);
      } else {
        // res(`Writing into ${fileName} successful.`);
        res(dataToWrite);
      }
    });
  });
};

const apndFile = (dataToAppend) => {
  return new Promise((res, rej) => {
    fs.appendFile("city.txt", dataToAppend, (err) => {
      if (err) {
        rej(err);
      }
    });
  });
};

axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.WEATHER_API_ID}&units=metric`
  )
  .then((res) => {
    return write("data.json", JSON.stringify(res.data));
  })
  .then((data) => {
    console.log("writing success");
    return data;
  })
  .then((data) => {
    let weatherDetails = JSON.parse(data);
    let newWeatherObj = {
      name: weatherDetails.name,
      weather: weatherDetails.weather,
      main: weatherDetails.main,
    };
    return write(
      `${newWeatherObj.name}-${now}.json`,
      JSON.stringify(newWeatherObj)
    );
  })
  .then((data) => {
    apndFile(data);
  })
  .then(() => {
    console.log("task completed");
  })
  .catch((err) => {
    console.error(err);
  });
