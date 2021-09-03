import React from "react";

function Slides(props) {
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
    <div className="slideimagescont">
      <div className="fadein slideimages" title="Corvette Image Slideshow">
        {slidesData.map((slide, index) => (
          <img key={index} src={slide} alt={`C${slidesData.length - index}`} />
          // <div
          //   key={index}
          //   style={{
          //     backgroundImage: `url(${slide})`,
          //   }}
          // ></div>
        ))}
      </div>
      {/* <div className="slideHeroText"> */}
      {/* <h2>Corvette - America's Sports Car</h2>
        <p>
          An enthusiasts guide to over 67 years of performance history -
          specifications, options, features and more
        </p> */}
      {/* <a href="#">Learn More</a> */}
      {/* </div> */}
    </div>
  );
}

export default Slides;
