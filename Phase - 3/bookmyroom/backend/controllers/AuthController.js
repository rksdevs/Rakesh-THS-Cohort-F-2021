import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register User
export const registerUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      userName: req.body.username,
      email: req.body.email,
      password: hash,
    });

    //Existing user validation
    const existingUser = await User.findOne({ userName: req.body.username });
    if (existingUser) {
      return res.status(400).send("User already exists. Please login instead!");
    }

    await newUser.save();
    const { password, isAdmin, ...otherDetails } = newUser._doc;
    res.status(200).send({
      msg: "User registration successful",
      userInfo: otherDetails,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//Login User
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.username });

    //Validation: if user exists
    if (!user) {
      return res.status(404).send("User not found!");
    }

    //Validation: is password
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).send("Wrong Password!");
    }

    //JWT
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    //destructing user doc to send only required info
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      }) //sending the jwt token as cookie with key-access_token, setting configuration to httpOnly which doesnt allow the client to use this cookie
      .status(200)
      .json(otherDetails); //what is the difference between res.status(200).json({...otherDetails});
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
