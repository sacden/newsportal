import React from "react";

const SearchForm = () => {
  return (
    <div className="header__search-form col-4">
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary dropdown-toggle" id="search-dropdown-category" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          All categories
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              General
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Business
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Еntertainment
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Health
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Science
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sports
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Technology
            </a>
          </li>
        </ul>

        <input type="text" className="form-control" id="search-dropdown-input" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" id="search-button" type="button">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
