import serviceAPI from "../API/ServiceAPI";

const Services = () => {
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading fw-bold text-center">
            How to send money?
          </h1>

          <div className="row gx-5">
            {serviceAPI.map((curElem) => (
              <div className="col-12 col-lg-4" key={curElem.id}>
                <i className={`fontawesomeStyle ${curElem.logo}`}></i>
                <h2 className="sub-heading">{curElem.title}</h2>
                <p className="main-hero-para">{curElem.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
