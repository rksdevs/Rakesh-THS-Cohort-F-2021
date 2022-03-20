const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: "https://i.stack.imgur.com/dr5qp.jpg",
  },
  role: {
    type: String,
    default: "APP_USER",
  },
  phoneNumber: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  lastLogin: {
    type: Date,
    default: Date.now(),
  },
  isFlagged: {
    type: Boolean,
    dedfault: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
  },
  verificationTokenExpiry: {
    type: Date,
  },
});

module.exports = mongoose.model("User", userSchema);
