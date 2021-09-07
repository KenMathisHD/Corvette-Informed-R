import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getGenerationData } from "../../../data/generationsData";

class Generation extends Component {
  state = {
    generation: { ...getGenerationData(this.props.match.params.generation) },
  };

  setColString = () => {
    let colString = "";
    for (let i = 0; i < this.state.generation.years.length; i++) {
      colString += "auto ";
    }
    return colString;
  };

  render() {
    const { generation } = this.state;
    const genPath = `/corvette/${this.props.match.params.generation}`;
    const templateColums =
      generation.years.length > 1 && generation.years.length < 4
        ? this.setColString()
        : "auto auto auto auto";

    return (
      <section className="grid-cont">
        <div className="grid-title">
          <h1>{generation.name} Generation</h1>
        </div>
        <div
          className="cG cGc7"
          style={{ backgroundImage: generation.backgroundImage }}
        >
          <div
            id="grid"
            className="grid"
            style={
              generation.years.length > 1
                ? {
                    justifyContent: "space-evenly",
                    gridTemplateColumns: templateColums,
                  }
                : { justifyContent: "center", gridTemplateColumns: "auto" }
            }
          >
            {generation.years.map((year, index) => (
              <Link
                key={index}
                to={genPath + year.path}
                style={{
                  backgroundColor: generation.backgroundColor,
                  color: generation.fontColor,
                  borderColor: generation.fontColor,
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
