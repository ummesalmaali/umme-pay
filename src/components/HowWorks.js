import React, { useState } from "react";
import WorkAPI from "../API/WorkAPI";

const HowWorks = () => {
  const [workData, setWorkData] = useState(WorkAPI);
  console.log(workData);
  return (
    <>
      <section className="service-main-container">
        <div className="container work-container">
          <h1 className="main-heading text-center">How does it work?</h1>
          <div className="row">
            {workData.map((curElem) => {
              const { logo, info, title, id } = curElem;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 text-center work-container-subdiv"
                    key={id}
                  >
                    <i className={`fontawesomeStyle ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWorks;
