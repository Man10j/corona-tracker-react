import React from "react";
import "./Header.css";
import covid from "../../images/image.png";

const Header = () => {
  return (
    <div className="header">
      <img src={covid} alt="covid" className="covid_head"></img>
    </div>
  );
};
export default Header;
