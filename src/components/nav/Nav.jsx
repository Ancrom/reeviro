import { NavLink } from "react-router-dom";

import "./style.css";
import "./../../styles/burger.css";

const Nav = ({ navColor, menuActive, setMenuActive }) => {
  return (
    <>
      <nav
        className="nav"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="nav__container container">
          <div className="nav__menu">
            <ul className={`nav__list ${navColor && "nav__list--dark"}`}>
              <li className="nav__item">
                <NavLink to="/" className="nav__link">
                  home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/concept" className="nav__link">
                  concept
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/illustration" className="nav__link">
                  illustration
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/project" className="nav__link">
                  project
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/personal" className="nav__link">
                  personal work
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/aboutMe" className="nav__link">
                  about
                </NavLink>
              </li>
            </ul>
            <button
              className={`nav__burger burger ${
                navColor ? "burger--black" : "burger--white"
              }`}
              onClick={() => {
                document.body.classList.toggle("no-scroll");
                setMenuActive(!menuActive);
              }}
            >
              <span className="burger__line"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
