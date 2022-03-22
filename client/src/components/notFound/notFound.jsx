import React from "react";
import "./notFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="background"></div>
      <h1>
        Error 404: We could not find the page you <br />
        were looking for
      </h1>
      <p>
        "
        <i>
          Dangit! It was right here! <br /> Where did I put that thing?
        </i>
        "
      </p>
    </div>
  );
};

export default NotFound;
