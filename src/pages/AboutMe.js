import Nav from "./../components/nav/Nav";
import About from "../components/about/About";

const AboutMe = ({ navColor, menuActive, setMenuActive }) => {
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
