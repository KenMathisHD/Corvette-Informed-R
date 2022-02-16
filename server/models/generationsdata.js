const mongoose = require("mongoose");

const GenerationsSchema = new mongoose.Schema(
  {
    path: { type: String, required: true },
    imgSrc: { type: String, required: true },
    alt: { type: String, required: true },
    label: { type: Object, required: true },
  },
  { collection: "generations" }
);

const GenerationsModel = mongoose.model("generations", GenerationsSchema);
// created model, passing name of collection and the schema we created

module.exports = GenerationsModel;
