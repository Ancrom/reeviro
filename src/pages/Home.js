import Nav from "./../components/nav/Nav";
import Hero from "./../components/hero/Hero";
import Gallery from "../components/gallery/Gallery";

const Home = ({
  menuActive,
  setMenuActive,
  lightboxActive,
  setLightboxActive,
}) => {
  return (
    <>
      <Nav menuActive={menuActive} setMenuActive={setMenuActive} />
      <Hero />
      <Gallery
        columns="2"
        page="home"
        lightboxActive={lightboxActive}
        setLightboxActive={setLightboxActive}
      />
    </>
  );
};

export default Home;
