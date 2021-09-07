import React from "react";
import { Link } from "react-router-dom";

const Generations = () => {
  const generations = {
    rootPath: "/corvette",
    generation: [
      {
        path: "/c1",
        imgSrc: "http://www.corvetteinformed.com/Images/C1 Gen Box.jpg",
        alt: "C1",
        label: "1953 - 1962",
      },
      {
        path: "/c2",
        imgSrc: "http://www.corvetteinformed.com/Images/C2 Banner.jpg",
        alt: "C2",
        label: "1962 - 1967",
      },
      {
        path: "/c3",
        imgSrc: "http://www.corvetteinformed.com/Images/C3 Banner.jpg",
        alt: "C3",
        label: "1968 - 1982",
      },
      {
        path: "/c4",
        imgSrc: "http://www.corvetteinformed.com/Images/C4 Banner.jpg",
        alt: "C4",
        label: "1984 - 1996",
      },
      {
        path: "/c5",
        imgSrc: "http://www.corvetteinformed.com/Images/C5 Gen Box.jpg",
        alt: "C5",
        label: "1997 - 2004",
      },
      {
        path: "/c6",
        imgSrc: "http://www.corvetteinformed.com/Images/C6 Gen Box 2.jpg",
        alt: "C6",
        label: "2005 - 2013",
      },
      {
        path: "/c7",
        imgSrc: "http://www.corvetteinformed.com/Images/C7 Gen Box.jpg",
        alt: "C7",
        label: "2014 - 2019",
      },
      {
        path: "/c8",
        imgSrc:
          // "https://media-dmg.assets-cdk.com/websites/content/gmps-hendrick-chev//53c81d965fdf4d9399371d11b0c7ab58_1268x450.jpg",
          "https://cimg2.ibsrv.net/gimg/www.corvetteforum.com-vbulletin/1268x450/53c81d965fdf4d9399371d11b0c7ab58_1268x450_857d9ac46415551e4f2a815814ab6ff6ddda1e18.jpg",
        alt: "C8",
        label: "2020 - Current",
      },
    ],
  };

  const { rootPath, generation } = generations;
  return (
    <>
      <span className="favoriteYear">What's your favorite year?</span>
      <div className="generations" title="Generation Selection Boxes C1 - C7">
        {generation.map((generation, index) => (
          <div key={index}>
            <Link to={rootPath + generation.path}>
              <img src={generation.imgSrc} alt={generation.alt} />
              <h2 className="genTexth2" id={generation.alt}>
                {generation.alt}
              </h2>
              <h3 className="genTexth3" id={generation.alt}>
                {generation.label}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Generations;
