import React, { useState, useEffect } from "react";
import { getForums, getNews, getTCACalendarEvents } from "../../data";
import "./newsAndForums.scss";
import * as api from "../../data/apiEndpoints.json";

function NewsAndForums() {
  const [forums, setForums] = useState([]);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const { data: images } = await getTCACalendarEvents(`${api.events}`);
      setEvents([images]);
    })();
    setForums([...getForums()]);
    setNews([...getNews()]);
  }, []);

  console.log(events);

  return (
    <div className="newsandforums-cont">
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
