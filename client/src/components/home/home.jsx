import React from "react";
import Slides from "./heroSlides";
import Generations from "./generations";
import HomeInfo from "./homeinfo";

function Home(props) {
  return (
    <div className="container">
      <Slides></Slides>
      {/* <HomeInfo></HomeInfo> */}
      <Generations></Generations>
    </div>
  );
}

export default Home;
