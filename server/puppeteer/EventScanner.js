const puppeteer = require("puppeteer");

async function getTCACalendarEvents() {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(
      "https://www.texas-corvette-association.com/content.aspx?page_id=4001&club_id=545376&action=cira&vm=MonthView"
    );
    const pageContent = await page.content();

    const result = await page.evaluate(() => {
      const calendarEvents = {};
      const monthYear = document
        .querySelector("#ctl00_ctl00_event_list_repeater_list_month_header_0")
        .innerText.match(/^(\w+),\s(\d{4})$/);
      calendarEvents.month = monthYear[1];
      calendarEvents.year = monthYear[2];
      const tempEvents = document.querySelectorAll(".list-event-container");
      calendarEvents.events = [...tempEvents].map((e) => {
        const link = e.querySelector("a");
        const event = {
          date: e.querySelector(".big-date-day").innerText,
          dateDay: e.querySelector(".big-date-month").innerText,
          title: link.innerText,
          description: link.getAttribute("title"),
          location: e.querySelector(".location-literal").innerText,
          href: link.href,
        };
        return event;
      });

      return calendarEvents;
    });
    await page.close();
    await browser.close();

    return result;
  } catch (e) {
    return "No Bueno, :" + e;
  }
}

module.exports = { getTCACalendarEvents };
