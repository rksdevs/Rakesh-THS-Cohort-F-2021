const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/auth");
const { roleCheck, Roles } = require("../../middleware/verifyRole");
const { body, param } = require("express-validator");

const {
  addProductSize,
} = require("../../controllers/admin/productSize.controller");

const multer = require("multer");

const storage = multer.memoryStorage(); // need to know

const upload = multer({ storage: storage }); //need to know

router.post(
  "/add",
  authMiddleware,
  roleCheck(Roles.admin),
  [
    body("size", "Size is required").isNumeric(),
    body("quantity", "Quanity is required").isNumeric(),
    body("productStyleId", "Invalid Product Style Id").isMongoId(),
    body("productId", "Invalid Product Id").isMongoId(),
  ],
  addProductSize
);

module.exports = router;
