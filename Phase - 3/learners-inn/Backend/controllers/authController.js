const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register User

const registerUser = async (req, res) => {
  try {
    const { userName, email, password, about, currentCity, nationality } =
      req.body;

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
      about,
      currentCity,
      nationality,
      password: hashedPassword,
    });

    await user.save();
    res.status(200).json({ info: "User registered", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "User registration failed", error });
  }
};

//Login user

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        info: "Login successful",
        user: user.userName,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      return res.status(400).json({ info: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Login user failed", error });
  }
};

//Get User

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userIdFromAuthMiddleware);
    const userInstance = {
      userName: user.userName,
      email: user.email,
      followers: user.followers,
      following: user.following,
      about: user.about,
      currentCity: user.currentCity,
      nationality: user.nationality,
    };

    res.status(200).json(userInstance);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Something went wrong", error });
  }
};

//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_DEV, {
    expiresIn: "1d",
  });
};
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
