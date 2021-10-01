import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#about">Contact</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3 ">
                  <h2>Follow us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/ummesalmaali2"
                        target="-blank"
                      >
                        <i className="fab fa-instagram fontawesomeStyle"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="https://www.facebook.com/iamummesalma">
                        <i className="fab fa-facebook-f fontawesomeStyle"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="https://www.youtube.com/ummesalmaali2">
                        <i className="fab fa-youtube fontawesomeStyle"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="https://www.instagram.com/ummesalmaali">
                        <i className="fab fa-twitter fontawesomeStyle"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <p className="main-hero-para text-center w-100">
                  Copyright @2021 UmmePay All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
