import React from "react";
import Navigation from "./Navigation/Navigation";
import LangDropDown from "./LangDropDown/LangDropDown";
import SearchForm from "./SearchForm/SearchForm";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <div className="header container">
      <div className="header__container container">
        <div className="row">
          <Logo />
          <SearchForm />
          <LangDropDown />
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
