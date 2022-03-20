const { validationResult } = require("express-validator");
const { streamUpload, fileDelete } = require("../../utils/cloudFiles");
const Brand = require("../../models/Brands");
const Series = require("../../models/Series");

const addSeries = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // const seriesId = req.params.id;
    const { name, description, brandId } = req.body;
    const brand = await Brand.findById(brandId);
    if (!brand) {
      return res.status(404).json({ errors: [{ info: "Invalid Brand Id" }] });
    }

    let series = { name, description, brand: brandId };
    if (req.file) {
      let upload = await streamUpload(req.file.buffer, "sneakerFreaker");
      // console.log(upload);
      series.image = upload.secure_url;
      series.imagePublicId = upload.public_id;
    }

    let seriesToAdd = new Series(series);
    await seriesToAdd.save();
    res.status(200).json({ info: "Series Accepted" });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

const updateSeries = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const seriesId = req.params.id;
    const { name, description, brandId } = req.body;
    const brand = await Brand.findById(brandId);
    if (!brand) {
      return res.status(404).json({ errors: [{ msg: "Invalid Brand ID" }] });
    }

    const series = await Series.findById(seriesId);
    if (!series) {
      return res.status(404).json({ errors: [{ msg: "Invalid series ID" }] });
    }
    series.name = name;
    series.description = description;

    if (req.file) {
      let upload = await streamUpload(req.file.buffer, "sneakerFreaker");
      series.image = upload.secure_url;
      if (series.imagePublicId !== "default-img") {
        await fileDelete(series.imagePublicId);
      }
      series.imagePublicId = upload.public_id;
    }
    await series.save();
    res.status(200).json({ info: "Series Updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

const deleteSeries = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const seriesId = req.params.id;
    const series = await Series.findByIdAndDelete(seriesId);
    if (!series) {
      return res.status(404).json({ msg: "Invalid Series ID" });
    }
    await fileDelete(series.imagePublicId);
    // await Brand.deleteOne({ id: brandId });
    res.status(200).json({ info: "Series Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

// const getAllBrands = async (req, res) => {
//   try {
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
//   }
// };

module.exports = {
  addSeries,
  updateSeries,
  deleteSeries,
};
