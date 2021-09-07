import React, { Component } from "react";
import YearTabs from "./yearTabs";
import axios from "../../../../data/axiosService";
import * as api from "../../../../data/apiEndpoints.json";

class Year extends Component {
  state = {
    yearData: {},
    activeTab: "",
    didMount: "false",
  };

  async componentDidMount() {
    const year = this.props.match.params.year;
    const { data: yearData } = await axios.get(`${api.years}/${year}`);
    const didmount = "true";
    this.setState({ yearData: yearData[0], didMount: didmount });
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    const { yearData, activeTab, didMount } = this.state;
    if (didMount === "false") {
      return null;
    } else {
      return (
        <div className="grid-cont">
          <div className="grid-title dispfont">
            <h1>{yearData.year} Model Year</h1>
          </div>

          <div
            className="img-cont-year"
            style={{ backgroundImage: yearData.imgSrc }}
          ></div>

          <YearTabs
            yearData={yearData}
            activeTab={activeTab}
            onClick={this.onClickTabItem}
          ></YearTabs>
        </div>
      );
    }
  }
}

export default Year;
