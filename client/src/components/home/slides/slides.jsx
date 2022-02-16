import React from "react";
import "./slides.scss";

const Slides = (props) => {
  const { className } = props;
  const slidesData = [
    "http://www.corvetteinformed.com/Images/1C7ZR1SlideshowPic1.jpg",
    "http://www.corvetteinformed.com/Images/C6Slideshow.jpg",
    "http://www.corvetteinformed.com/Images/1C5SlideshowPic3.jpg",
    "http://www.corvetteinformed.com/Images/C4%20Slideshow%20Pic.jpg",
    "http://www.corvetteinformed.com/Images/C3%20Sildeshow%20Pic.jpg",
    "http://www.corvetteinformed.com/Images/C2%20Slideshow%20Pic.jpg",
    "http://www.corvetteinformed.com/Images/C1%20Slideshow%20Pic.jpg",
  ];
  return (
    <div className={`slideimagescont ${className}`}>
      <div className="fadein slideimages" title="Corvette Image Slideshow">
        {slidesData.map((slide, index) => (
          <img key={index} src={slide} />
        ))}
      </div>
    </div>
  );
};

export default Slides;
