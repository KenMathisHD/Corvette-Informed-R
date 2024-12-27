const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    alt: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    year: { type: String, required: true },
    submodel: { type: String, required: true },
    body: { type: String, required: true },
  },
  { collection: "gallery" }
);

const GalleryModel = mongoose.model("gallery", GallerySchema);
// created model, passing name of collection and the schema we created

module.exports = GalleryModel;
