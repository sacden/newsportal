import React from "react";
import * as bootstrap from "bootstrap";
const LangDropDown = () => {
  return (
    <div className="header__language-dropdown col-2">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          Language
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <button className="dropdown-item" type="button">
              English
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              German
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              French
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LangDropDown;
