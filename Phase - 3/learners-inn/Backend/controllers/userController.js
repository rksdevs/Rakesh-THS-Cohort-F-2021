const User = require("../models/User");
const bcrypt = require("bcrypt");

const getAnyUser = async (req, res) => {
  try {
    const userToSearch = await User.findById(req.params.id);

    //Validations - if no such user in the database
    if (!userToSearch) {
      return res.status(400).json({ info: "Invalid search user credentials" });
    }

    const userInstance = {
      userName: userToSearch.userName,
      email: userToSearch.email,
      followers: userToSearch.followers,
      following: userToSearch.following,
      about: userToSearch.about,
      currentCity: userToSearch.currentCity,
      nationality: userToSearch.nationality,
    };

    res.status(200).json(userInstance);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

const updateProfile = async (req, res) => {
  try {
    //Validation - User can update only one's own profile
    const userId = req.params.id;
    // const isAdmin = await User.findById(userId).isAdmin;
    // console.log(isAdmin);
    if (req.userIdFromAuthMiddleware === userId) {
      const user = await User.findByIdAndUpdate(userId, { $set: req.body });

      await user.save();
      res.status(200).json({ info: "Profile updated successfully!" });
    } else {
      return res.status(400).json({ info: "Not Authorized" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

module.exports = { getAnyUser, updateProfile };
