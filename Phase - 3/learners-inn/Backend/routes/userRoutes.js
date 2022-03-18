const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getAnyUser, updateProfile } = require("../controllers/userController");

//Get Any User
router.get("/:id", authMiddleware, getAnyUser);

//Update Own Profile
router.put("/updateProfile/:id", authMiddleware, updateProfile);

//Delete User
//Follow a User
//Unfollow a user

module.exports = router;
