import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getGenerationData } from "../../../data/generationsData";

function Generation(props) {
  const [generationObj, setGenerationObj] = useState(null);
  const genProp = props.match.params.generation;

  useEffect(async () => {
    const result = await getGenerationData(genProp);
    setGenerationObj(result);
  }, []);

  const setColString = (arr) => {
    return arr.length > 4
      ? "auto auto auto auto"
      : arr
          .map(() => {
            return "auto";
          })
          .join(" ");
  };

  if (!generationObj) {
    return <span>Loading, please wait</span>;
  } else {
    return (
      <section className="grid-cont">
        <div className="grid-title">
          <h1>{generationObj.name} Generation</h1>
        </div>
        <div
          className="cG cGc7"
          style={{ backgroundImage: generationObj.backgroundImage }}
        >
          <div
            id="grid"
            className="grid"
            style={{
              justifyContent:
                generationObj.years.length > 1 ? "space-evenly" : "center",
              gridTemplateColumns: setColString(generationObj.years),
            }}
          >
            {generationObj.years.map((year, index) => (
              <Link
                key={index}
                to={`/corvette/${genProp}` + year.path}
                style={{
                  backgroundColor: generationObj.backgroundColor,
                  color: generationObj.fontColor,
                  borderColor: generationObj.fontColor,
                }}
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
