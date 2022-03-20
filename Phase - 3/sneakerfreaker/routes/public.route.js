const express = require("express");
const router = express.Router();
const {
  getAllBrands,
  getAllSeries,
  getAllProducts,
} = require("../controllers/public.controller");

router.get("/brands", getAllBrands);
router.get("/series", getAllSeries);
router.get("/products", getAllProducts);

module.exports = router;
