import WorkAPI from "../API/WorkAPI";

const HowWorks = () => {
  return (
    <>
      <section className="service-main-container">
        <div className="container work-container">
          <h1 className="main-heading text-center">How does it work?</h1>
          <div className="row g-5 ">
            {WorkAPI.map((curElem) => {
              const { logo, info, title, id } = curElem;
              return (
                <div
                  className="col-12 col-lg-4 text-center d-flex flex-column justify-content-center align-items-center "
                  key={id}
                >
                  <i className={`fontawesomeStyle ${logo}`}></i>
                  <h2 className="sub-heading">{title}</h2>
                  <p className="px-2 fs-4 mt-3">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWorks;
