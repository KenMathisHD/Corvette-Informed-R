import React from "react";
import "./pagefooter.scss";

const PageFooter = () => {
  const footerData = {
    centerImg: {
      img: "http://www.corvetteinformed.com/Images/PBottomCLogo.jpg",
      alt: "Corvette Logo Centerpiece",
    },
    socialImgs: [
      {
        img: "http://www.corvetteinformed.com/Images/facebook.png",
        path: "/",
        alt: "Facebook Logo",
        class: "socialImg",
      },
      {
        img: "http://www.corvetteinformed.com/Images/twitter.png",
        path: "/",
        alt: "Twitter Logo",
        class: "socialImg",
      },
      {
        img: "http://www.corvetteinformed.com/Images/PBottomCLogo.jpg",
        path: "/",
        alt: "Corvette Logo Centerpiece",
        class: "centerImg",
      },
      {
        img: "http://www.corvetteinformed.com/Images/instagram.jpg",
        path: "/",
        alt: "Instagram Logo",
        class: "socialImg",
      },
      {
        img: "http://www.corvetteinformed.com/Images/email.png",
        path: "/",
        alt: "Email Photo",
        class: "socialImg",
      },
    ],
  };
  return (
    <footer className="page-bottom-cont">
      <div className="page-bottom">
        {/* <div className="centerImg">
            <img src={footerData.centerImg.img} alt={footerData.centerImg.alt}/>
        </div> */}

        {footerData.socialImgs.map((imgNum, index) => (
          <a key={index} id={index} className={imgNum.class} href={imgNum.path}>
            <img src={imgNum.img} alt={imgNum.alt} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default PageFooter;
