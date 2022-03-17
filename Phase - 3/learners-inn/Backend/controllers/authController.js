const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register User

const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    //Validations - checking credentials
    if (!userName || !email || !password) {
      return res.status(400).json({ info: "Missing User Credentials" });
    }

    //Validations - checking existing users

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ info: "User already exists, please login instead" });
    }

    //Hashing Password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    //Creating User
    const user = await new User({
      userName,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(200).json({ info: "User registered", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: error });
  }
};

module.exports = {
  registerUser,
};
