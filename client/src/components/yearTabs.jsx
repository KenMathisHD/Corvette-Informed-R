import React, { Component } from "react";
import parse from "html-react-parser";

class YearTabs extends Component {
  tabLabels = (tab) => {
    if (tab.id === "general") tab.label = "General Overview";
    if (tab.id === "options") tab.label = "Factory Options";
    if (tab.id === "specs") tab.label = "Performance and Specifications";
    if (tab.id === "facts") tab.label = "Facts";
  };

  standardOptional = (tab, index) => {
    return (
      <div className="fifty50" key={index}>
        {tab.content.map((content, index) => {
          return (
            <div className="fiftychildren" key={index}>
              <h3>{content.label}</h3>

              {content.data[0].standard === undefined ? (
                <ul className="options-ul">
                  {content.data.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              ) : (
                <div>
                  {content.data.filter((data) => data.standard === false)
                    .length === 0 ? (
                    <ul className="options-ul">
                      {content.data.map((data, index) => (
                        <li key={index}>{data.text}</li>
                      ))}
                    </ul>
                  ) : (
                    <div>
                      <h4>Standard</h4>
                      <ul className="options-ul">
                        {content.data
                          .filter((data) => data.standard === true)
                          .map((data, index) => (
                            <li key={index}>{data.text}</li>
                          ))}
                      </ul>
                      <h4>Optional</h4>
                      <ul className="options-ul">
                        {content.data
                          .filter((data) => data.standard === false)
                          .map((data, index) => (
                            <li key={index}>{data.text}</li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { yearData, onClick, activeTab } = this.props;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {yearData.listBoxes.map((tab, index) => {
            this.tabLabels(tab);
            return (
              <li
                key={index}
                className={
                  activeTab === tab.id
                    ? "tab-list-item tab-list-active"
                    : "tab-list-item"
                }
                onClick={() => onClick(tab.id)}
              >
                <a href={`#${tab.id}`}>{tab.label}</a>
              </li>
            );
          })}
        </ol>
        <div className="tab-content">
          {yearData.listBoxes.map((tab, index) => {
            if (tab.id === "general") {
              return (
                <div id={tab.id}>
                  <h2>{tab.label}</h2>
                  {tab.content.map((content, index) => (
                    <div className="genInfo" key={index}>
                      <p>{parse(content.text)}</p>
                      <img src={content.image} alt={content.imageAlt} />
                    </div>
                  ))}
                </div>
              );
            } else if (typeof tab.content[0] === "string") {
              return (
                <div id={tab.id} className="tabSection">
                  <h2>{tab.label}</h2>
                  <ul className="fifty50" key={index}>
                    {tab.content.map((content, index) => {
                      return (
                        <li key={index} className="fiftychildren">
                          {content}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            } else if (typeof tab.content[0] === "object") {
              return (
                <div id={tab.id} className="tabSection">
                  <h2>{tab.label}</h2>
                  <div className="fifty50" key={index}>
                    {tab.content.map((content, index) => {
                      return (
                        <div className="fiftychildren" key={index}>
                          <h3>{content.label}</h3>
                          <ul className="options-ul">
                            {content.data.map((data, index) => (
                              <li key={index}>{data}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default YearTabs;
