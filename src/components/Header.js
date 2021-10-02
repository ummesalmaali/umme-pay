import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-start flex-column order-lg-first order-last">
              <h1 className="display-2">
                Online Payment Made <br /> Easy For You
              </h1>
              <p className="main-hero-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                ducimus repudiandae blanditiis illum corrupti laborum eligendi.
                Ducimus recusandae eaque vero praesentium dolore minus vitae.
                Molestiae ea aliquam quia. Necessitatibus, unde.
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="   w-75
               me-3
               form-control-text
               p-2
               rounded-pill"
                  placeholder="Enter your email"
                />
                <div className="input-group-button">Get it Now</div>
              </div>
            </div>
            {/* {-----------/* main header right side----------- */}
            <div className="col-12 col-lg-6 header right-side d-flex justify-content-center align-items-center main-hero-section-images order-md-first order-sm-first">
              <img
                src="./images/hero1.jpg"
                className="img-fluid"
                alt="heroimg"
              />
              <img
                src="./images/lady3.jpg"
                className="img-fluid main-hero-section-img2"
                alt="heroimg"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
