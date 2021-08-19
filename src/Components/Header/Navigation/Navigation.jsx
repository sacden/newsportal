import React from "react";
const Navigation = () => {
  return (
    <div className="navigation">
      <div className="row justify-content-md-center">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      All categories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      General
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Business
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Еntertainment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Health
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Science
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Sports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Technology
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
