import "./style.css";
import Lightbox from "../lightbox/Lightbox";
import { imageList } from "../../helpers/galleryImgsList.js";
import React, { useState } from "react";

const Gallery = ({ columns, page, lightboxActive, setLightboxActive }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const pageImagesList = imageList.filter((image) =>
    image.forPages.includes(page)
  );
  if (columns) {
    return (
      <>
        <section className="gallery">
          <div className="gallery__container container gallery__container--col-2">
            <div className="gallery__column">
              {pageImagesList
                .slice(0, Math.round(pageImagesList.length / 2))
                .map((item) => (
                  <div
                    key={item.title}
                    className="gallery__item"
                    data-aos="fade-right"
                  >
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
                .map((item) => (
                  <div
                    key={item.title}
                    className="gallery__item"
                    data-aos="fade-left"
                  >
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
            {pageImagesList.map((item) => (
              <div
                key={item.title}
                className="gallery__item"
                data-aos="fade-up"
              >
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
