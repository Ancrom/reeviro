import Nav from "./../components/nav/Nav";
import Gallery from "./../components/gallery/Gallery";

const Concept = ({
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
      <Gallery
        page="concept"
        lightboxActive={lightboxActive}
        setLightboxActive={setLightboxActive}
      />
    </>
  );
};

export default Concept;
