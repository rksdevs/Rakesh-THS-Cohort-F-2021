const { validationResult } = require("express-validator");
const User = require("../models/User");
const Ticket = require("../models/Ticket");

//@desc Get Tickets
//@route GET/api/tickets
//@access Private
const getTickets = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // const user = await User.findById(req.userId); //userId is from authMiddleware line 15
    // const copiedUser = {
    //   name: user.name,
    //   id: user._id,
    //   email: user.email,
    // };
    res.status(200).json({ info: "getTickets" });
  } catch (error) {
    return res.status(500).json({ error: [{ msg: "Internal Server Error" }] });
  }
};

//@desc Create Tickets
//@route POST/api/tickets
//@access Private
const createTicket = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // const user = await User.findById(req.userId); //userId is from authMiddleware line 15
    // const copiedUser = {
    //   name: user.name,
    //   id: user._id,
    //   email: user.email,
    // };
    res.status(200).json({ info: "createTicket" });
  } catch (error) {
    return res.status(500).json({ error: [{ msg: "Internal Server Error" }] });
  }
};

module.exports = { getTickets };
