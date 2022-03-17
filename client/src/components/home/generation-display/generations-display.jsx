import React from "react";
import { Link } from "react-router-dom";
import GenerationDisplayTile from "./generation-display-tile/generation-display-tile";
import "./generations-display.scss";

const GenerationsDisplay = (props) => {
  const { className, generations } = props;

  return (
    <div
      className={`generations ${className}`}
      title="Generation Selection Boxes C1 - C7"
    >
      {generations.map(({ path, imgSrc, alt, label }, index) => {
        return (
          <Link key={index} to={"/corvette" + path}>
            <GenerationDisplayTile
              src={imgSrc}
              alt={alt}
              label={label}
            ></GenerationDisplayTile>
          </Link>
        );
      })}
    </div>
  );
};

export default GenerationsDisplay;
