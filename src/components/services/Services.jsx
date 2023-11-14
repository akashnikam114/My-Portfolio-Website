import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Personal Projects</span>

      <div className="services__container container grid">
        {/* first */}

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Major <br /> Project
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i
              className="uil uil-arrow-right 
                    services__button-icon"
            ></i>
          </span>
      
          <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">Major Project Name:</h3>
              <p className="services__model-description">
                Automation of Attendance System Using Face Recognition
                Technique.
              </p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I develop the front-end part.
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I create admin login page.
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I create database of admin page.
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Capturing the attendance and store in database.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* second */}

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Minor <br /> Project 1
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More{" "}
            <i
              className="uil uil-arrow-right 
                    services__button-icon"
            ></i>
          </span>

          <div className={toggleState === 2 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">Minor Project-1 Name:</h3>
              <p className="services__model-description">
                Food Ordering Website.
              </p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Order food from different restaurents.
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I create the user interface.
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Web page development.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Add more features in wesbite.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* third */}

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Minor <br /> Project 2
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More{" "}
            <i
              className="uil uil-arrow-right 
                    services__button-icon"
            ></i>
          </span>

          <div className={toggleState === 3 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">Minor Project-2 Name:</h3>
              <p className="services__model-description">
                My personal portfolio.
              </p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Web page development.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I create this portfolio using React JS
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
