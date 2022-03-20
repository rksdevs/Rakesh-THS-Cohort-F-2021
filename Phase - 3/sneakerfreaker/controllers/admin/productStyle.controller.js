const { validationResult } = require("express-validator");
const Product = require("../../models/Product");
const { streamUpload, fileDelete } = require("../../utils/cloudFiles");
const ProductStyle = require("../../models/ProductStyles");
const ProductSize = require("../../models/ProductSize");

const addProductStyle = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      color,
      price,
      discountedPrice,
      limitedEdition,
      designerName,
      productId,
    } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).json({ error: [{ info: "Invalid Product Id" }] });
    }

    // const productSize = await ProductSize.findById();

    let productStyle = {
      color,
      price,
      discountedPrice,
      limitedEdition,
      designerName,
      product: productId,
    };
    //uploading more than 1 image from buffer
    if (req.files.length > 0) {
      let uploadImg = await Promise.all(
        req.files.map((img) => streamUpload(img.buffer, "sneakerFreaker"))
      );
      productStyle.images = uploadImg.map((res) => ({
        imageUrl: res.secure_url,
        publicId: res.public_id,
      }));
    }
    let productStyleToSave = new ProductStyle(productStyle);
    await productStyleToSave.save();
    //pushing the productStyle Id into the productStyle property of Product schema and saving it
    product.productStyles.push(productStyleToSave._id);
    await product.save();
    res.status(200).json({ info: "Product Style Added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

module.exports = {
  addProductStyle,
};
