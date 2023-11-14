import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Education</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          {/* <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>               */}
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor of Technology(CSE)
                </h3>
                <span className="qualification__subtitle">
                  DBatu University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2019 - 2023
                  <br />
                  CGPA- 9.02
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">HSC</h3>
                <span className="qualification__subtitle">
                  Balwant College, Vita
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2018 - 2019
                  <br />
                  Percentage- 64.31
                </div>
                <br />
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC</h3>
                <span className="qualification__subtitle">
                  Chinchani Highschool Chinchani(M.)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2016 - 2017
                  <br />
                  Percentage- 89.00
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
