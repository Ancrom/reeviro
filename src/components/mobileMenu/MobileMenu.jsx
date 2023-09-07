import { NavLink } from "react-router-dom";

import "./style.css";
import "./../../styles/burger.css";

const MobileMenu = ({ menuActive, setMenuActive }) => {
  function menuClose() {
    document.body.classList.toggle("no-scroll");
    setMenuActive(false);
  }
  return (
    <div className={`mobile-menu ${menuActive ? "active" : ""}`}>
      <button
        className="mobile-menu__burger burger active"
        onClick={() => menuClose()}
      >
        <span className="burger__line"></span>
      </button>
      <ul className="mobile-menu__list" onClick={() => menuClose()}>
        <li className="mobile-menu__item">
          <NavLink to="/" className="mobile-menu__link">
            home
          </NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink to="/concept" className="mobile-menu__link">
            concept
          </NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink to="/illustration" className="mobile-menu__link">
            illustration
          </NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink to="/project" className="mobile-menu__link">
            project
          </NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink to="/personal" className="mobile-menu__link">
            personal work
          </NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink to="/aboutMe" className="mobile-menu__link">
            about
          </NavLink>
        </li>
        <li className="mobile-menu__item mobile-menu__contact-me">
          <a
            href="mailto:natalia2dartist@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="mobile-menu__link"
          >
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
