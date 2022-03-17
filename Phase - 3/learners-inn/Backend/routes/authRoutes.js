const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/authController");

//Register user
// router.get("/", (req, res) => {
//   res.send("Hey its auth route");
// });
router.post("/register", registerUser);

module.exports = router;
