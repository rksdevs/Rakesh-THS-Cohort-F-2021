const { validationResult } = require("express-validator");
// const User = require("../models/User");
const Address = require("../models/Address");

const addAddress = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { addressLineOne, addressLineTwo, city, state, landmark, pincode } =
      req.body;
    // const checkUser = await User.findById(req.user._id);
    // if (!checkUser) {
    //   return res.status(400).json({ errors: [{ msg: "User not available" }] });
    // }
    let address = {
      user: req.user._id,
      addressLineOne,
      addressLineTwo,
      city,
      state,
      landmark,
      pincode,
    };
    let addressToAdd = new Address(address);
    await addressToAdd.save();
    res.status(200).json({ info: "Address Added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

//update Address

//delete Address

module.exports = {
  addAddress,
};
