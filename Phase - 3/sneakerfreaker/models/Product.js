const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  series: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Series",
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
  productStyles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductStyle",
    },
  ],
  created: {
    type: Date,
    default: Date.now(),
  },
  lastUpdated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
