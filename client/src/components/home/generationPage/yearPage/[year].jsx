import React, { useState, useEffect } from "react";
import YearTabs from "./yearTabs/yearTabs";
import axios from "../../../../data/services/axiosService";
import * as api from "../../../../data/apiEndpoints.json";
import "./[year].scss";

function Year(props) {
  const [yearData, setYearData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data: yearData } = await axios.get(
        `${api.years}/${props.match.params.year}`
      );
      setYearData(yearData[0]);
    }

    fetchData();
  });

  if (!yearData) {
    return <span>Loading, please wait</span>;
  } else {
    return (
      <div className="year-cont">
        <div className="year-title">
          <h1>{yearData.year} Model Year</h1>
        </div>

        <div
          className="img-cont-year"
          style={{ backgroundImage: yearData.imgSrc }}
        ></div>

        <YearTabs yearData={yearData}></YearTabs>
      </div>
    );
  }
}

export default Year;
