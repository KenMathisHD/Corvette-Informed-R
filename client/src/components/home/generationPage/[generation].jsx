import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getGenerationData } from "../../../data/generationsData";
import "./[generation].scss";

function Generation(props) {
  const [generationObj, setGenerationObj] = useState(null);
  const genProp = props.match.params.generation;

  useEffect(() => {
    async function fetchData() {
      const result = await getGenerationData(genProp);
      setGenerationObj(result);
    }
    fetchData();
  });

  const setColString = (arr) => {
    if (arr.length > 4) {
      return null;
    }
    return arr
      .map(() => {
        return "auto";
      })
      .join(" ");
  };

  const gridStyleObj = (generationObj) => {
    const styles = {
      justifyContent:
        generationObj.years.length > 1 ? "space-evenly" : "center",
    };
    if (setColString(generationObj.years)) {
      styles.gridTemplateColumns = setColString(generationObj.years);
    }
    return {
      justifyContent:
        generationObj.years.length > 1 ? "space-evenly" : "center",
    };
  };

  if (!generationObj) {
    return <span>Loading, please wait</span>;
  } else {
    return (
      <section className="gen-page-cont">
        <h1 className="grid-title">{generationObj.name} Generation</h1>
        <div
          className="grid-cont"
          style={{ backgroundImage: generationObj.backgroundImage }}
        >
          <div id="grid" className="grid" style={gridStyleObj(generationObj)}>
            {generationObj.years.map((year, index) => (
              <Link
                key={index}
                to={`/corvette/${genProp}` + year.path}
                style={{
                  backgroundColor: generationObj.backgroundColor,
                  color: generationObj.fontColor,
                  borderColor: generationObj.fontColor,
                }}
                className="link"
              >
                {year.year}
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Generation;
