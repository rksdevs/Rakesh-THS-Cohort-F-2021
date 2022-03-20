const crypto = require("crypto");
const { rzpwebHookSecret } = require("../config/keys");
// const { captureOrder } = require("../controllers/order.controller");

const capturePayment = (req, res, next) => {
  try {
    let body = JSON.stringify(req.body);
    let expectedSignature = crypto
      .createHmac("sha256", rzpwebHookSecret)
      .update(body.toString())
      .digest("hex");
    console.log(req.headers);
    if (expectedSignature === req.headers["x-razorpay-signature"]) {
      next();
    } else {
      res.status(403).json({ error: [{ msg: "Unauthorized" }] });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = capturePayment;
