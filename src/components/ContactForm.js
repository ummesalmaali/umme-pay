import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Contact With Our <br /> Sale Team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quisquam amet enim mollitia exercitationem magnam ratione.
                  </p>
                  <figure>
                    <img
                      src="./images/lady8.jpg"
                      alt="womenwithhubby"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                {/* right side contact form */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="First Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Last Name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Phone No"
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter Your Email Address"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12  contact-input-field">
                        <input
                          type="text"
                          placeholder="Your Address"
                          className="form-control "
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          placeholder="Your Message"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckChecked"
                        className="main-hero-para "
                      >
                        I agree that the UmmePay may contact me at the email
                        address or phone number above
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn-style form-control w-100"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
