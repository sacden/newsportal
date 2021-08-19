import React from "react";
const SearchForm = () => {
  return (
    <div className="header__search-form col-4">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
