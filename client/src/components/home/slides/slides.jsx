import React from "react";
import "./slides.scss";

const Slides = (props) => {
  const { className } = props;
  const slidesData = [
    {
      img: "http://www.corvetteinformed.com/Images/1C7ZR1SlideshowPic1.jpg",
      alt: "Orange C7 Corvette ZR1 on a track",
    },
    {
      img: "http://www.corvetteinformed.com/Images/C6Slideshow.jpg",
      alt: "Black C6 Corvette Z06 infront of a hilly overlook",
    },
    {
      img: "http://www.corvetteinformed.com/Images/1C5SlideshowPic3.jpg",
      alt: "Yellow C5 Corvette Z06 in the city",
    },
    {
      img: "http://www.corvetteinformed.com/Images/C4%20Slideshow%20Pic.jpg",
      alt: "Maroon C4 Corvette infront of some palm trees",
    },
    {
      img: "http://www.corvetteinformed.com/Images/C3%20Sildeshow%20Pic.jpg",
      alt: "Black C3 Corvette Convertible with side pipes infront of a farm field",
    },
    {
      img: "http://www.corvetteinformed.com/Images/C2%20Slideshow%20Pic.jpg",
      alt: "Maroon C2 Corvette on an old farm road",
    },
    {
      img: "http://www.corvetteinformed.com/Images/C1%20Slideshow%20Pic.jpg",
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
