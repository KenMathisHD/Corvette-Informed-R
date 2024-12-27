const mongoose = require("mongoose");

const YearSchema = new mongoose.Schema(
  {
    year: { type: String, required: true },
    imgSrc: { type: String, required: true },
    alt: { type: String, required: true },
    listBoxes: { type: Array, required: true },
  },
  { collection: "years" }
);

const YearModel = mongoose.model("years", YearSchema);
// created model, passing name of collection and the schema we created

module.exports = YearModel;
