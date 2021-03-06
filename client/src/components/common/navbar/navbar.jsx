import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  const navData = {
    links: [
      {
        label: "Home",
        path: "/",
      },
      {
        label: "Gallery",
        path: "/gallery",
      },
      {
        label: "News and Forums",
        path: "/newsandforums",
      },
      // {
      //   label: "About Me",
      //   path: "/aboutme",
      // },
    ],
  };
  return (
    <div className="header">
      <h1>Corvette Informed</h1>
      <nav className="nav justify-content-center">
        {navData.links.map((link, index) => (
          <Link className="nav-link" key={index} to={link.path}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
