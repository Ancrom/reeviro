import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./styles/reset.css";
import "./styles/AOS.css";
import "./styles/base.css";
import Footer from "./../src/components/footer/Footer";
import BtnContactMe from "../src/components/btnContactMe/BtnContactMe";
import MobileMenu from "../src/components/mobileMenu/MobileMenu";
import Home from "./pages/Home";
import Concept from "./pages/Concept";
import Illustration from "./pages/Illustration";
import Project from "./pages/Project";
import PersonalWork from "./pages/PersonalWork";
import AboutMe from "./pages/AboutMe";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [lightboxActive, setLightboxActive] = useState(false);

  const commonProps = {
    navColor: "dark",
    menuActive,
    setMenuActive,
    lightboxActive,
    setLightboxActive,
  };

  return (
    <div className="App">
      <Router>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home {...commonProps} />} />
            <Route path="/concept" element={<Concept {...commonProps} />} />
            <Route
              path="/illustration"
              element={<Illustration {...commonProps} />}
            />
            <Route path="/project" element={<Project {...commonProps} />} />
            <Route
              path="/personal"
              element={<PersonalWork {...commonProps} />}
            />
            <Route path="/aboutMe" element={<AboutMe {...commonProps} />} />
          </Routes>
        </main>
        <Footer />
        <BtnContactMe />
        <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      </Router>
    </div>
  );
}

export default App;
