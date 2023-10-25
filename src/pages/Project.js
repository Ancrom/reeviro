import Nav from "./../components/nav/Nav";
import Accordion from "../components/accordion/Accordion";
import { useEffect, useRef } from "react";

const Project = ({
  navColor,
  menuActive,
  setMenuActive,
  lightboxActive,
  setLightboxActive,
}) => {
  const animatedElements = useRef([]);
	useEffect(() => {
    const galleryItems = document.querySelectorAll(
      ".gallery__item, .hero__container, .nav__container, .accordion__body, .about__container"
    );
    galleryItems.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 200) {
        element.classList.add("animated");
        animatedElements.current.push(index);
      }
    });
  }, []);
	
  return (
    <>
      <Nav
        navColor={navColor}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
      />
      <Accordion
        lightboxActive={lightboxActive}
        setLightboxActive={setLightboxActive}
      />
    </>
  );
};

export default Project;
