import React from "react";
import logoimage from "./logo.png";

const Logo = () => {
  return (
    <div className="header__logo col-2">
      <img src={logoimage} className="img-fluid" alt="logo" />
    </div>
  );
};

export default Logo;
