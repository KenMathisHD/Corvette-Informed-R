const eventScanner = require("./EventScanner");

async function getPage(req, res) {
  try {
    let resp = await eventScanner.getTCACalendarEvents();
    return res.status(200).send(resp);
  } catch (e) {
    let resp = "" + e + "";
    return res.send(resp);
  }
}

module.exports = { getPage };
