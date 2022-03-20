const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const { roleCheck, Roles } = require("../middleware/verifyRole");
const { body, param } = require("express-validator");
const capturePaymentMiddleware = require("../middleware/capturePayment");
const {
  generateOrder,
  paymentOrder,
  captureOrder,
} = require("../controllers/order.controller");

router.post(
  "/generate",
  authMiddleware,
  roleCheck(Roles.user),
  [
    body("deliverySpeedId", "Enter a valid delivery speed id").isMongoId(),
    body("addressId", "Enter a valid address id").isMongoId(),
  ],
  generateOrder
);

router.get(
  "/payment/:id",
  authMiddleware,
  roleCheck(Roles.user),
  param("id").isMongoId(),
  body("paymentOrder"),
  paymentOrder
);

router.post("/capture", capturePaymentMiddleware, captureOrder);

module.exports = router;
