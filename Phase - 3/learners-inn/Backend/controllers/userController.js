const User = require("../models/User");
const bcrypt = require("bcrypt");

const getAnyUser = async (req, res) => {
  try {
    const userToSearch = await User.findById(req.params.id);

    //Validations - if no such user in the database
    if (!userToSearch) {
      return res.status(403).json({ info: "Invalid search user credentials" });
    }

    // const userInstance = {
    //   userName: userToSearch.userName,
    //   email: userToSearch.email,
    //   followers: userToSearch.followers,
    //   following: userToSearch.following,
    //   about: userToSearch.about,
    //   currentCity: userToSearch.currentCity,
    //   nationality: userToSearch.nationality,
    // };

    // res.status(200).json(userInstance);

    const { password, updatedAt, ...others } = userToSearch._doc;
    res.status(200).json(others);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

const updateProfile = async (req, res) => {
  try {
    // Validation to check if user is an admin - pending
    //Update password -pending
    //Validation - User can update only one's own profile
    const userId = req.params.id;
    if (req.userIdFromAuthMiddleware === userId) {
      const user = await User.findByIdAndUpdate(userId, { $set: req.body });

      await user.save();
      res.status(200).json({ info: "Profile updated successfully!" });
    } else {
      return res.status(403).json({ info: "Not Authorized" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

const deleteUser = async (req, res) => {
  try {
    //Validation - check if the user is the owner of the account or an Admin - We are sending UserId/Admin from frontend/in the body
    if (req.params.id === req.body.userId || req.body.isAdmin) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ info: "Account Deleted" });
    } else {
      return res
        .status(403)
        .json({ info: "You can delete only your own account" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

//Follow user

const followUser = async (req, res) => {
  try {
    if (req.body.userId !== req.params.id) {
      const userToFollow = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (!userToFollow.followers.includes(req.body.userId)) {
        await userToFollow.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json({ info: "Following: " + userToFollow.userName });
      } else {
        return res.status(403).json({ info: "You already follow this user" });
      }
    } else {
      return res.status(403).json({ info: "You can't follow yourself" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

//Unfollow a user

const unfollowUser = async (req, res) => {
  try {
    if (req.body.userId !== req.params.id) {
      const userToUnfollow = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (userToUnfollow.followers.includes(req.body.userId)) {
        await userToUnfollow.updateOne({
          $pull: { followers: req.body.userId },
        });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res
          .status(200)
          .json({ info: "Unfollowed: " + userToUnfollow.userName });
      } else {
        return res.status(403).json({ info: "You don't follow this user" });
      }
    } else {
      return res.status(403).json({ info: "You can't unfollow yourself" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

module.exports = {
  getAnyUser,
  updateProfile,
  deleteUser,
  followUser,
  unfollowUser,
};
