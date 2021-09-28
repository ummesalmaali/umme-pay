import React from "react";

const NavBar = () => {
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a href className="navbar-brand">
              UmmePay
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href className="nav-link active" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href className="nav-link active" aria-current="page">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href className="nav-link active" aria-current="page">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href className="nav-link active" aria-current="page">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href>
                    Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn  btn-style" type="submit">
                  Sign Up
                </button>
                <button
                  className="btn btn-style btn-style-border"
                  type="submit"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
