const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
// const keys = require("./config/keys");

dotenv.config();

//DB Connection

mongoose.connect(
  process.env.DB_CONNECTION_DEV,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connect to DB - learnersinndev");
  }
);

//Middlewares
app.use(express.json()); //Its a body parser, when we use post request, it is going to parse it
app.use(helmet());
app.use(morgan("common"));

// app.get("/", (req, res) => {
//   res.send("Welcome to homepage");
// });

// app.get("/users", (req, res) => {
//   res.send("Welcome to users page");
// });

//Start the server
app.listen(8800, () => {
  console.log("Server is running on port: 8800");
});
