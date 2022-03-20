const express = require("express");
const router = express.Router();
const brandRouter = require("./brand.route");
const productRouter = require("./product.route");
const seriesRouter = require("./series.route");
const productStyleRouter = require("./productStyle.route");
const productSizeRouter = require("./productSize.route");
const deliverySpeedRouter = require("./deliverySpeed.route");

router.use("/brand", brandRouter);
router.use("/product", productRouter);
router.use("/series", seriesRouter);
router.use("/productStyle", productStyleRouter);
router.use("/productSize", productSizeRouter);
router.use("/deliverySpeed", deliverySpeedRouter);

module.exports = router;
