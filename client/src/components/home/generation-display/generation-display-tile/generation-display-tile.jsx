import React from "react";
import "./generation-display-tile.scss";

const GenerationDisplayTile = (props) => {
  const { src, alt, label } = props;

  return (
    <div className="ci-generation-display-wrapper">
      <div className="ci-generation-display" title="Generation Selection Boxes">
        <img src={src} alt={alt} />
        <div className="genText" id={alt}>
          <span>{label.gen}</span>
          <span>{label.years}</span>
        </div>
      </div>
    </div>
  );
};

export default GenerationDisplayTile;
