const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/auth");
const { roleCheck, Roles } = require("../../middleware/verifyRole");
const { body } = require("express-validator");
const {
  addDeliverySpeed,
} = require("../../controllers/admin/deliverySpeed.controller");

router.post(
  "/add",
  authMiddleware,
  roleCheck(Roles.admin),
  [
    body("name", "Name is required").notEmpty(),
    body("speed", "Speed is required").notEmpty(),
    body("price", "Price is required").isNumeric(),
    body("partner", "Partner is required").notEmpty(),
  ],
  addDeliverySpeed
);

module.exports = router;
