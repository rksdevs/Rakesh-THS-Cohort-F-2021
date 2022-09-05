import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { connectToDb } from "./config/db";

const app = express();
dotenv.config();

//connection to db
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database!");
  } catch (error) {
    throw error;
  }
};

//checking mongoDB database integration
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected!");
});

//testing api endpoints
// app.get("/", (req, res) => {
//   res.send("Endpoint connected");
// });

app.listen(8800, () => {
  connectToDb();
  console.log("Connected to port 8800");
});
