const express = require("express");
const app = express();
const router = express.Router();
const puppeteer = require("puppeteer");
const puppeteerController = require("./puppeteer/Controller");
const cors = require("cors");
const mongoose = require("mongoose");
const YearModel = require("./models/yeardata");
const GalleryModel = require("./models/gallerydata");
const GenerationsModel = require("./models/generationsdata");

app.use(cors());
app.use(express.json());

require("dotenv").config();

mongoose.connect(process.env.DB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});

app.get("/api/getEvents", puppeteerController.getPage);

// app.get("/api/getEvents", async (req, res) => {
//   try {
//     let resp = await getTCACalendarEvents();
//     return res.status(200).send(resp);
//   } catch (e) {
//     return res.status(400).send({
//       error: "not-found",
//     });
//   }
// });
app.get("/api/getGalleryLinks", async (req, res) => {
  GalleryModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/getyear/:id", async (req, res) => {
  const { id: year } = req.params;

  YearModel.find({ year: year }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/getGenerations", async (req, res) => {
  GenerationsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
