import React, { useState } from "react";

const SearchForm = () => {
  const [category, setCategory] = useState("Allcategories");
  const [navButtons, setNavButtons] = useState([
    { key: "general", value: "General" },
    { key: "business", value: "Business" },
    { key: "entertainment", value: "Еntertainment" },
    { key: "health", value: "Health" },
    { key: "science", value: "Science" },
    { key: "sports", value: "Sports" },
    { key: "technology", value: "Technology" },
  ]);

  const showCategory = (e) => {
    const element = e.target.childNodes[0].textContent;

    setCategory(element);
  };

  const createNavButtons = () => {
    return navButtons.map((button) => (
      <li className="nav-item" key={button.key} value={button.value} onClick={(e) => showCategory(e)}>
        <a className="dropdown-item" href="#">
          {button.value}
        </a>
      </li>
    ));
  };

  return (
    <div className="header__search-form col-4">
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary dropdown-toggle" id="search-dropdown-category" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {category}
        </button>
        <ul className="dropdown-menu">{createNavButtons()}</ul>

        <input type="text" className="form-control" id="search-dropdown-input" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" id="search-button" type="button">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
