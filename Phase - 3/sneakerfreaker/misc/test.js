const cloudinary = require("cloudinary").v2;
const path = require("path");

cloudinary.config({
  cloud_name: "dsmvsemjv",
  api_key: "412336749743197",
  api_secret: "U2IzZgiMkX7mVfXJLaooXlQepqw",
  secure: true,
});

cloudinary.uploader.upload(
  path.resolve("./nike.png"),
  { folder: "SneakerFreaker" },
  (err, img) => {
    if (err) throw err;
    else {
      console.log(img);
    }
  }
);
