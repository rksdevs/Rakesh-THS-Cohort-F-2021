const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

//Register user
router.post("/register", registerUser);

//Login User
router.post("/login", loginUser);

//Get own profile
router.get("/profile", authMiddleware, getMe);

module.exports = router;
