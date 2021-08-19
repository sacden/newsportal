import React from "react";
import Navigation from "./Navigation/Navigation";
import LangDropDown from "./LangDropDown/LangDropDown";
import SearchForm from "./SearchForm/SearchForm";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <Logo />
        <SearchForm />
        <LangDropDown />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
