const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/auth");
const { roleCheck, Roles } = require("../../middleware/verifyRole");
const { body, param } = require("express-validator");
const {
  addBrand,
  updateBrand,
  deleteBrand,
} = require("../../controllers/admin/brand.controller");

const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     const fileType = file.originalname.split(".");
//     let extn = fileType.length >= 2 ? `.${fileType[fileType.length - 1]}` : "";
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, "Images" + "-" + uniqueSuffix);
//   },
// });

const storage = multer.memoryStorage(); // need to know

const upload = multer({ storage: storage }); //need to know

router.post(
  "/add",
  authMiddleware,
  roleCheck(Roles.admin),
  upload.single("brandImg"),
  [
    body("name", "Name Cannot be empty").notEmpty(),
    body("description", "Description cannot be empty").notEmpty(),
  ],

  addBrand
);

router.put(
  "/update/:id",
  authMiddleware,
  roleCheck(Roles.admin),
  upload.single("brandImg"),
  [
    body("name", "Name Cannot be empty").notEmpty(),
    body("description", "Description cannot be empty").notEmpty(),
  ],

  updateBrand
);

router.delete(
  "/:id",
  authMiddleware,
  roleCheck(Roles.admin),
  param("id", "Brand Id invalid").isMongoId(),
  deleteBrand
);

module.exports = router;
