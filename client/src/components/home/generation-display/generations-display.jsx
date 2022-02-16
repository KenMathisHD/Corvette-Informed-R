import React from "react";
import { Link } from "react-router-dom";
import "./generations-display.scss";
import GenerationDisplayTile from "./generation-display-tile/generation-display-tile";

const GenerationsDisplay = (props) => {
  const { className, generations } = props;
  const rootPath = "/corvette";

  return (
    <div
      className={`generations ${className}`}
      title="Generation Selection Boxes C1 - C7"
    >
      {generations.map(({ path, imgSrc, alt, label }, index) => {
        return (
          <Link key={index} to={rootPath + path}>
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
