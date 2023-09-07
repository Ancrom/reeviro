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
  return (
    <div className="App">
      <Router>
        <main className="main">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                  lightboxActive={lightboxActive}
                  setLightboxActive={setLightboxActive}
                />
              }
            />
            <Route
              path="/concept"
              element={
                <Concept
                  navColor={"dark"}
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                  lightboxActive={lightboxActive}
                  setLightboxActive={setLightboxActive}
                />
              }
            />
            <Route
              path="/illustration"
              element={
                <Illustration
                  navColor={"dark"}
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                  lightboxActive={lightboxActive}
                  setLightboxActive={setLightboxActive}
                />
              }
            />
            <Route
              path="/project"
              element={
                <Project
                  navColor={"dark"}
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                  lightboxActive={lightboxActive}
                  setLightboxActive={setLightboxActive}
                />
              }
            />
            <Route
              path="/personal"
              element={
                <PersonalWork
                  navColor={"dark"}
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                  lightboxActive={lightboxActive}
                  setLightboxActive={setLightboxActive}
                />
              }
            />
            <Route
              path="/aboutMe"
              element={
                <AboutMe
                  navColor={"dark"}
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                />
              }
            />
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
