import React, { Component } from "react";
import { getForums } from "../data/forumsData";
import { getNews } from "./../data/newsData";

class NewsAndForums extends Component {
  state = { forums: [], news: [] };

  componentDidMount() {
    const forums = [...getForums()];
    const news = [...getNews()];
    this.setState({ forums, news });
  }

  render() {
    console.log(this.state.forums);
    const { forums, news } = this.state;
    return (
      <div className="newsandforums-cont">
        <div>
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
        </div>
        {/* <div>
          <h2>Visit the museum!</h2>
        </div> */}
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
      </div>
    );
  }
}

export default NewsAndForums;
