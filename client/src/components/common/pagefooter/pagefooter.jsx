import React from "react";
import "./pagefooter.scss";

const PageFooter = () => {
  const footerData = {
    centerImg: {
      img: "/images/PBottomCLogo.jpg",
      alt: "Corvette Logo Centerpiece",
    },
    socialImgs: [
      {
        img: "/images/facebook.png",
        path: "/",
        alt: "Facebook Logo",
        class: "socialImg",
      },
      {
        img: "/images/twitter.png",
        path: "/",
        alt: "Twitter Logo",
        class: "socialImg",
      },
      {
        img: "/images/PBottomCLogo.jpg",
        path: "/",
        alt: "Corvette Logo Centerpiece",
        class: "centerImg",
      },
      {
        img: "/images/instagram.jpg",
        path: "/",
        alt: "Instagram Logo",
        class: "socialImg",
      },
      {
        img: "/images/email.png",
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
