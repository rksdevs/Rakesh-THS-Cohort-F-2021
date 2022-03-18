const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    //Get token from header
    const token = req.header("authorization");
    if (!token) {
      return res
        .status(400)
        .json({ info: "Authorization failed", type: "Error" });
    }
    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_DEV);

    // Setup the User object from id inside the decoded

    // const user = await User.findById(decoded.id).select("-password");
    // next(); // we can do this to get the entire user object excluding password but we need to update password too

    req.userIdFromAuthMiddleware = decoded.id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Error in authorization" });
  }
};

module.exports = authMiddleware;
