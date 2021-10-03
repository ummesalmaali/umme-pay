import howToUseApp from "../API/Usage";

const About = () => {
  return (
    <div>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-11 col-lg-5 text-center our-services-leftside-img">
              <img
                src="./images/lady5.jpg"
                alt="aboutusImg"
                className="img-fluid"
              />
            </div>
            {/* {------/* about us right side data-------- */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading mt-5">How to use the App?</h1>
              {howToUseApp.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <div className="row our-services-info" key={id}>
                    <div className="col-1 our-services-number">{id}</div>
                    <div className="col-10 our-services-data">
                      <h2>{title}</h2>
                      <p className="main-hero-para">{info}</p>
                    </div>
                  </div>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>
      {/* ///////////////////////second part of about us section///////////////////////////// */}
      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* {------/* about us right side data-------- */}
            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start flex-column second-part-data">
              <h3 className="mini-title">--SUPPORT IN ANY LANGUAGE</h3>
              <h1 className="main-heading">
                World Class Support is <br /> Available 24/7
              </h1>
              {howToUseApp.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <div className="row our-services-info" key={id}>
                    <div className="col-1 our-services-number">{id}</div>
                    <div className="col-10 our-services-data">
                      <h2>{title}</h2>
                      <p className="main-hero-para">{info}</p>
                    </div>
                  </div>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
            <div className="col-12 col-lg-5 text-center our-services-rightside-img">
              <img
                src="./images/lady7.jpg"
                alt="aboutusImg"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
