const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  productStyle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductStyle",
    required: true,
  },
  productSize: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductSize",
    required: true,
  },
});

module.exports = mongoose.model("CartItem", cartItemSchema);
