import React, { useState } from "react";

const LangDropDown = () => {
  const [lang, setLanguage] = useState("English");
  const [buttons, setButtons] = useState([
    { key: "en", value: "English" },
    { key: "fr", value: "French" },
    { key: "ge", value: "German" },
  ]);

  const showLanguage = (e) => {
    const element = e.target.value;
    setLanguage(element);
  };

  const createButtons = () => {
    return buttons.map((button) => (
      <li key={button.key}>
        <button className="dropdown-item" value={button.value} type="button" onClick={(e) => showLanguage(e)}>
          {button.value}
        </button>
      </li>
    ));
  };

  return (
    <div className="header__language-dropdown col-2">
      <div className="dropdown">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="lang-switch" data-bs-toggle="dropdown" aria-expanded="false">
          {lang}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {createButtons()}
        </ul>
      </div>
    </div>
  );
};

export default LangDropDown;
