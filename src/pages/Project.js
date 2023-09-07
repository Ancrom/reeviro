import Nav from "./../components/nav/Nav";
import Accordion from "../components/accordion/Accordion";

const Project = ({
  navColor,
  menuActive,
  setMenuActive,
  lightboxActive,
  setLightboxActive,
}) => {
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
