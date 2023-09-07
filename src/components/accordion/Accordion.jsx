import "./style.css";
import Lightbox from "../lightbox/Lightbox";
import { projectsList } from "./../../helpers/projectsList.js";
import React, { useState } from "react";

const Accordion = ({ lightboxActive, setLightboxActive }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [projectIndex, setProjectIndex] = useState(null);
  const toggleAccordion = (target) => {
    const content = target.nextElementSibling;

    if (target.classList.contains("accordion__btn")) {
      target.classList.toggle("active");
      const btnText = target.querySelector("span");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        btnText.innerHTML = "Click to expand";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        btnText.innerHTML = "Click to hide";
      }
    }
  };

  return (
    <>
      <section className="accordion">
        <div className="accordion__container container">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="accordion__body"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <h2 className="accordion__title">
                <span>{project.title}</span>
              </h2>
              <p className="accordion__desc">{project.description}</p>
              <button
                className="accordion__btn"
                onClick={(e) => {
                  setProjectIndex(projectsList.indexOf(project));
                  toggleAccordion(e.target);
                }}
              >
                <img
                  className="accordion__img-wrapper"
                  src={project.cover}
                  alt="Project cover"
                />
                <span className="accordion__text">Click to expand</span>
              </button>
              <div className="accordion__content">
                {project.imgs.map((img, index) => (
                  <div key={index} className="accordion__img-wrapper">
                    <img
                      className="accordion__img"
                      src={img}
                      alt=""
                      onClick={() => {
                        setSelectedImageIndex(project.imgs.indexOf(img));
                        setLightboxActive(!lightboxActive);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Lightbox
        lightboxActive={lightboxActive}
        setLightboxActive={setLightboxActive}
        pageImagesList={projectsList}
        projectIndex={projectIndex}
        selectedImageIndex={selectedImageIndex}
      />
    </>
  );
};

export default Accordion;
