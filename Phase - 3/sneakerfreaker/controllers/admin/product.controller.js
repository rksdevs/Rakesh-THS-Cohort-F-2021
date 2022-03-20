const { validationResult } = require("express-validator");
const { streamUpload, fileDelete } = require("../../utils/cloudFiles");
const Product = require("../../models/Product");
const Brand = require("../../models/Brands");
const Series = require("../../models/Series");

const addProduct = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, description, brandId, seriesId } = req.body; //not sure how to get the brand information
    const brand = await Brand.findById(brandId);
    const series = await Series.findById(seriesId);
    if (!brand) {
      return res.status(404).json({ errors: [{ info: "Invalid Brand Id" }] });
    }
    if (!series) {
      return res.status(404).json({ errors: [{ info: "Invalid Series Id" }] });
    }
    let product = {
      name,
      description,
      brand: brandId,
      series: seriesId,
      productStyles: [],
    };
    //need to validate if the brand is exist
    // const brandName = await Brand.findOne(brand.name); //can't find by name
    // if (!brandName) {
    //   return res.status(404).json({ errors: [{ msg: "Invalid Brand Name" }] });
    // }
    let productToAdd = new Product(product);
    await productToAdd.save();
    res.status(200).json({ info: "Product Added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

//complete update product
const updateProduct = async (req, res) => {
  try {
    //server side validation for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const productId = req.params.id; //require product id
    const { name, description, brandId, seriesId } = req.body; //deconstruct req body
    const brand = await Brand.findById(brandId); //get the brand by id
    if (!brand) {
      //validation for brand id
      return res.status(404).json({ errors: [{ msg: "Invalid Brand ID" }] });
    }

    const series = await Series.findById(seriesId); //get the series by id
    if (!series) {
      //validation for series by id
      return res.status(404).json({ errors: [{ msg: "Invalid series ID" }] });
    }

    const product = await Product.findById(productId); //new product using the product id
    if (!product) {
      //validation for product id
      return res.status(404).json({ errors: [{ msg: "Invalid product ID" }] });
    }
    //update product name, description,
    product.name = name;
    product.description = description;
    product.brandId = brandId;
    product.seriesId = seriesId;
    await product.save();
    res.status(200).json({ info: "Product Updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

//complete delete product

const deleteProduct = async (req, res) => {
  try {
    //errors validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const productId = req.params.id; //get the product with the id
    const product = await Product.findByIdAndDelete(productId); //delete the product by id
    if (!product) {
      return res.status(400).json({ msg: "Invalid Product Id" });
    }
    res.status(200).json({ inf: "Product Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
};
