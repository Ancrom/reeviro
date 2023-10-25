import "./style.css";
import Lightbox from "../lightbox/Lightbox";
import { imageList } from "../../helpers/galleryImgsList.js";
import React, { useState, useEffect, useRef  } from "react";

const Gallery = ({ columns, page, lightboxActive, setLightboxActive }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const animatedElements = useRef([]);

  const pageImagesList = imageList.filter((image) =>
    image.forPages.includes(page)
  );

	useEffect(() => {
    const galleryItems = document.querySelectorAll(".gallery__item, .hero__container, .nav__container, .accordion__body, .about__container");
    galleryItems.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 200) {
        element.classList.add("animated");
        animatedElements.current.push(index);
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const galleryItems = document.querySelectorAll(".gallery__item, .hero__container, .nav__container, .accordion__body, .about__container");

      galleryItems.forEach((element, index) => {
        if (!animatedElements.current.includes(index)) {
          const rect = element.getBoundingClientRect();
          if ((rect.top <= window.innerHeight - 200 && rect.bottom >= 0)) {
            element.classList.add("animated");
            animatedElements.current.push(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (columns) {
    return (
      <>
        <section className="gallery">
          <div className="gallery__container container gallery__container--col-2">
            <div className="gallery__column">
              {pageImagesList
                .slice(0, Math.round(pageImagesList.length / 2))
                .map((item, index) => (
                  <div key={item.title} className={`gallery__item fade-right ${animatedElements.current.includes(index) ? "animated" : ""}`}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="gallery__image"
                      onClick={() => {
                        setSelectedImageIndex(pageImagesList.indexOf(item));
                        setLightboxActive(!lightboxActive);
                      }}
                    />
                    <span className="gallery__text">{item.title}</span>
                  </div>
                ))}
            </div>
            <div className="gallery__column">
              {pageImagesList
                .slice(Math.round(pageImagesList.length / 2))
                .map((item, index) => (
                  <div key={item.title} className={`gallery__item fade-left ${animatedElements.current.includes(index) ? "animated" : ""}`}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="gallery__image"
                      onClick={() => {
                        setSelectedImageIndex(pageImagesList.indexOf(item));
                        setLightboxActive(!lightboxActive);
                      }}
                    />
                    <span className="gallery__text">{item.title}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <Lightbox
          lightboxActive={lightboxActive}
          setLightboxActive={setLightboxActive}
          pageImagesList={pageImagesList}
          selectedImageIndex={selectedImageIndex}
        />
      </>
    );
  } else {
    return (
      <>
        <section className="gallery">
          <div className="gallery__container container">
            {pageImagesList.map((item, index) => (
              <div key={item.title} className={`gallery__item fade-up ${animatedElements.current.includes(index) ? "animated" : ""}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="gallery__image"
                  onClick={() => {
                    setSelectedImageIndex(pageImagesList.indexOf(item));
                    setLightboxActive(!lightboxActive);
                  }}
                />
                <span className="gallery__text">{item.title}</span>
              </div>
            ))}
          </div>
        </section>
        <Lightbox
          lightboxActive={lightboxActive}
          setLightboxActive={setLightboxActive}
          pageImagesList={pageImagesList}
          selectedImageIndex={selectedImageIndex}
        />
      </>
    );
  }
};

export default Gallery;