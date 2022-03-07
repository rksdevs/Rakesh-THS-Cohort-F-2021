var express = require("express");
var router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

//Register user

router.post("/", registerUser);

//Login user

router.post("/login", loginUser);

module.exports = router;
