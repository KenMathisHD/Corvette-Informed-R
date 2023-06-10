import React, { useState, useEffect } from "react";
import { getForums, getNews, getTCACalendarEvents } from "../../data";
import "./newsAndForums.scss";
import * as api from "../../data/apiEndpoints.json";

function NewsAndForums() {
  const [forums, setForums] = useState([]);
  const [news, setNews] = useState([]);
  const [eventResp, setEventResp] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTCACalendarEvents(`${api.events}`);
      setEventResp(data);
    })();
    setForums([...getForums()]);
    setNews([...getNews()]);
  }, []);

  console.log(eventResp);

  const { events, month, year } = eventResp;

  console.log(eventResp.events);

  return (
    <div className="newsandforums-cont">
      <div className="events-list-cont">
        <h2 className="newsForumH2">Upcoming TCA Events</h2>
        <ul className="event-list">
          {events
            ? events.map((event, index) => (
                <li key={index}>
                  <a
                    href={event.href}
                    className="event-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>{event.title}</h3>
                    <span>
                      {event.dateDay}, {month} {event.date}, {year} -{" "}
                      {event.location}
                    </span>
                  </a>
                  <p>{event.description}</p>
                </li>
              ))
            : "Loading Calendar..."}
        </ul>
      </div>
      <div className="news-list-cont">
        <h2 className="newsForumH2">Corvette News Sites</h2>
        <ul className="news-list">
          {news.map((news, index) => (
            <li key={index}>
              <a
                href={news.url}
                className="news-link"
                target="_blank"
                rel="noreferrer"
              >
                {news.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="newsForumH2">Check out the forums</h2>
        {forums.map((forum, index) => (
          <div key={index} className="forums-list-cont">
            <h3>{forum.type}</h3>
            <ul className="forums-list">
              {forum.list.map((forum, index) => (
                <li key={index}>
                  <a
                    href={forum.url}
                    className="forum-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {forum.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="museum">
        <h2>Visit the museum!</h2>
        <a href="https://www.corvettemuseum.org/">
          Corvette Museum in Bowling Greene, KY
        </a>
      </div>
    </div>
  );
}

export default NewsAndForums;
