import React, { useState } from "react";
import * as bootstrap from "bootstrap";
const LangDropDown = () => {
  const [lang, setLanguage] = useState([
    { label: "English", value: "English" },
    { label: "French", value: "French" },
    { label: "German", value: "German" },
  ]);

  const showLanguage = (element) => {
    // setLanguage(); // тут остановился
    //setLanguage(element);
    // setLanguage(element);
    //return element;
  };
  //onClick={() => showLanguage}
  const createButton = () => {
    return lang.map((item) => (
      <li key={item.value} value={item.value}>
        <button className="dropdown-item" type="button" onClick={() => showLanguage(item)}>
          {item.label}
        </button>
      </li>
    ));
  };

  return (
    <div className="header__language-dropdown col-2">
      <div className="dropdown">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="lang-switch" data-bs-toggle="dropdown" aria-expanded="false">
          Choose language
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {createButton()}
        </ul>
      </div>
    </div>
  );
};

export default LangDropDown;
