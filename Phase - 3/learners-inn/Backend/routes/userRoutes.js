const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  getAnyUser,
  updateProfile,
  deleteUser,
  followUser,
} = require("../controllers/userController");

//Get Any User
router.get("/:id", authMiddleware, getAnyUser);

//Update Own Profile
router.put("/updateProfile/:id", authMiddleware, updateProfile);

//Delete User

router.delete("/:id", authMiddleware, deleteUser);

//Follow a User

router.put("/:id/follow", authMiddleware, followUser);
//Unfollow a user

module.exports = router;
