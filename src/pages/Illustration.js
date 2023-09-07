import Nav from "./../components/nav/Nav";
import Gallery from "../components/gallery/Gallery";

const Illustration = ({
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
        columns="2"
        page="illustration"
        lightboxActive={lightboxActive}
        setLightboxActive={setLightboxActive}
      />
    </>
  );
};

export default Illustration;
