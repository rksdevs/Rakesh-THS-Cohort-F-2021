// const ex = require("express");
var express = require("express");
var router = express.Router();
const { param, body, validationResult } = require("express-validator");
const {
  user,
  registerUser,
  verifyEmail,
  loginUser,
} = require("../controllers/users.controller");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/", user);

router.post(
  "/register",
  [
    body("name", "Name is required").trim().notEmpty(),
    body("email", "Enter valid email").trim().isEmail().normalizeEmail(),
    body("password", "Password must be 8 Character long").isLength({ min: 8 }),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation doesn't match password");
      }
      return true;
    }),
  ],
  registerUser
  //   (req, res) => {
  //     const errors = validationResult(req);
  //     if (!errors.isEmpty()) {
  //       return res.status(400).json({ errors: errors.array() });
  //     }
  //     res.send("User Registered");
  //   }
);
router.get(
  "/verifyEmail/:token",
  [
    param("token", "Enter a valid token").isHexadecimal(),
    //   .isLength({ min: 32, max: 32 }),
  ],
  verifyEmail
);

router.post(
  "/login",
  [
    body("email", "Enter a valid email address")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "Password must be 8 character long").isLength({ min: 8 }),
  ],
  loginUser
);
// router.get("/:id", [param("id", "Invalid ID").isMongoId()], (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   res.send("Works");
// });

// router.post(
//   "/register",
//   (req, res, next) => {
//     try {
//       const { name, email, password, confirmPassword } = req.body;
//       let errors = [];
//       if (!name || name.length === 0) {
//         errors.push("Name is required");
//       }
//       if (!email || email.length === 0) {
//         errors.push("Email is required");
//       }
//       if (errors.length > 0) {
//         res.status(403).send(errors.toString());
//       } else {
//         next();
//       }
//     } catch (error) {
//       res.status(500).send("Internal Server Error");
//     }
//   },
//   registerUser
// );

module.exports = router;
