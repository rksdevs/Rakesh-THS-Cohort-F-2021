//Top 20 Stories using Async-Await

const axios = require("axios");
const fs = require("fs");

const write = (fileName, dataToWrite) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, dataToWrite, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Writing successfull");
      }
    });
  });
};

let stories = async () => {
  try {
    let topStories = await axios.get(
      `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    );
    let top20Stories = topStories.data.slice(0, 20);
    let storyDetails = top20Stories.map((ele) => {
      return axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${ele}.json`
      );
    });
    let getStoryDetails = await Promise.all(storyDetails);
    for (key of getStoryDetails) {
      let writeStories = await write(
        `${key.data.id}.txt`,
        JSON.stringify(key.data)
      );
    }
    console.log("Writing Successfull");
  } catch (error) {
    console.error(error);
  }
};

stories();
