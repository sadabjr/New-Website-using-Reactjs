import React, {useState} from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <>
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#gpt3">What is gpt3?</a>
          </p>
          <p>
            <a href="#possibility">Open Ai</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
  </>
)

// BEM- Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#gpt3">What is gpt3?</a>
          </p>
          <p>
            <a href="#possibility">Open Ai</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className="gpt3__navbar-menu-container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">

              </div>
            </div>
          )

          }
      </div>
    </div>
  );
};

export default Navbar;
