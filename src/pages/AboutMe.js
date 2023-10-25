import Nav from "./../components/nav/Nav";
import About from "../components/about/About";
import { useEffect, useRef } from "react";


const AboutMe = ({ navColor, menuActive, setMenuActive }) => {
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
      <About />
    </>
  );
};

export default AboutMe;
