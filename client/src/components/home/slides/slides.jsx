import React from "react";
import "./slides.scss";

const Slides = (props) => {
  const { className } = props;
  const slidesData = [
    {
      img: "/images/home/slideshow/C7-Slideshow.jpg",
      alt: "Orange C7 Corvette ZR1 on a track",
    },
    {
      img: "/images/home/slideshow/C6-Slideshow.jpg",
      alt: "Black C6 Corvette Z06 infront of a hilly overlook",
    },
    {
      img: "/images/home/slideshow/C5-Slideshow.jpg",
      alt: "Yellow C5 Corvette Z06 in the city",
    },
    {
      img: "/images/home/slideshow/C4-Slideshow.jpg",
      alt: "Maroon C4 Corvette infront of some palm trees",
    },
    {
      img: "/images/home/slideshow/C3-Sildeshow.jpg",
      alt: "Black C3 Corvette Convertible with side pipes infront of a farm field",
    },
    {
      img: "/images/home/slideshow/C2-Slideshow.jpg",
      alt: "Maroon C2 Corvette on an old farm road",
    },
    {
      img: "/images/home/slideshow/C1-Slideshow.jpg",
      alt: "Black C1 Corvette convertible",
    },
  ];
  return (
    <div className={`slideimagescont ${className}`}>
      <div className="fadein slideimages" title="Corvette Image Slideshow">
        {slidesData.map(({ img, alt }, index) => (
          <img key={index} src={img} alt={alt} />
        ))}
      </div>
    </div>
  );
};

export default Slides;
