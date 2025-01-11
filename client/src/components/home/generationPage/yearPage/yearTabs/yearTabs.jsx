import React from "react";
import parse from "html-react-parser";
import "./yearTabs.scss";

function YearTabs(props) {
  const { yearData, activeTab } = props;

  const generalInfo = (tab) => {
    return tab.content.map((content, index) => (
      <div className="gen-info" key={index}>
        <p>{parse(content.text)}</p>
        <figure>
          <img src={content.image} alt={content.imageAlt} />
          <figcaption>{content.imageAlt}</figcaption>
        </figure>
      </div>
    ));
  };

  const factoryOptions = (tab) => {
    return (
      <div className="fifty-50">
        {tab.content.map((content, index) => {
          return (
            <div className="fifty-children" key={index}>
              <h3>{content.label}</h3>
              <ul className="options-ul">
                {content.data.map((data, index) => (
                  <li key={index}>{parse(data)}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };

  const perfSpec = (tab) => {
    return (
      <div className="fifty-50">
        {tab.content.map((content, index) => {
          return (
            <div className="fifty-children" key={index}>
              <h3>{content.label}</h3>
              <ul className="options-ul">
                {content.data.map((data, index) => (
                  <li key={index}>{parse(data)}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };

  const facts = (tab) => {
    return (
      <ul className="fifty-50">
        {tab.content.map((content, index) => {
          return (
            <li key={index} className="fifty-children">
              {parse(content)}
            </li>
          );
        })}
      </ul>
    );
  };

  const tabs = (tab) => {
    if (tab.id === "general") {
      return generalInfo(tab);
    } else if (tab.id === "specs") {
      return perfSpec(tab);
    } else if (tab.id === "options") {
      return factoryOptions(tab);
    } else if (tab.id === "facts") {
      return facts(tab);
    }
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {yearData.listBoxes.map((tab, index) => {
          return (
            <li
              key={index}
              className={
                activeTab === tab.id
                  ? "tab-list-item tab-list-active"
                  : "tab-list-item"
              }
            >
              <a href={`#${tab.id}`}>{tab.label}</a>
            </li>
          );
        })}
      </ol>

      <div className="tab-content">
        {yearData.listBoxes.map((tab, index) => (
          <div key={index} id={tab.id} className="tab-section">
            <h2>{tab.label}</h2>
            {tabs(tab)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default YearTabs;
