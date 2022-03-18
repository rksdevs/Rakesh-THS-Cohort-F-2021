const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    about: {
      type: String,
      max: 100,
    },
    currentCity: {
      type: String,
      max: 50,
    },
    nationality: {
      type: String,
      max: 50,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
