const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/auth");
const { roleCheck, Roles } = require("../../middleware/verifyRole");
const { body, param } = require("express-validator");
const multer = require("multer");
const {
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/admin/product.controller");

const storage = multer.memoryStorage(); // need to know, is it to access the storage

const upload = multer({ storage: storage }); //need to know

router.post(
  "/add",
  authMiddleware,
  roleCheck(Roles.admin),
  //we need to add product image to product schema
  //
  [
    body("name", "Name Cannot be empty").notEmpty(),
    body("description", "Description cannot be empty").notEmpty(),
    body("brandId", "Invalid Brand Id").isMongoId(),
    body("seriesId", "Invalid Series Id").isMongoId(),
  ],
  addProduct
);

router.put(
  "/update/:id",
  authMiddleware,
  roleCheck(Roles.admin),
  //we need to add product image to product schema
  [
    body("name", "Name Cannot be empty").notEmpty(),
    body("description", "Description cannot be empty").notEmpty(),
    body("brand", "Invalid Brand Id").isMongoId(),
    body("series", "Invalid Series Id").isMongoId(),
    param("id", "Invalid Product Id").isMongoId(),
  ],
  updateProduct
);

//complete the delete product route

router.delete(
  "/:id",
  authMiddleware,
  roleCheck(Roles.admin),
  param("id", "product Id invalid").isMongoId(),
  deleteProduct
);

module.exports = router;
