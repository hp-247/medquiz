import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  function hideMenu() {
    let menuOpen = document.querySelector(".menu-toggle").checked;

    if ((menuOpen = true)) {
      document.querySelector(".toggler").checked = false;
    }
  }
  return (
    <div>
      <div className="header">
        <Link to="/home" onClick={hideMenu}>
          <img
            className="header__logo"
            src={require("./images/med_logo.png")}
            alt="logo"
          />
        </Link>

        <Link to="/home" className="link" onClick={hideMenu}>
          <div className="logo__text">medquiz</div>
        </Link>
        <div className="group">
          <Link to="/quizzes" className="link">
            <div className="header__option">Quizzes</div>
          </Link>

          <Link to="/notes" className="link">
            <div className="header__option header__Notes">Notes</div>
          </Link>

          <Link to="/flashcards" className="link">
            <div className="header__option header__flashcards">Flashcards</div>
          </Link>

          <Link to="/" className="link">
            <div className="header__nav">
              <div className="header__option">
                <span className="name header__optionLineOne">Hi Jennifer</span>
                <span className="name header__optionLineTwo">Sign Out</span>
              </div>
            </div>
          </Link>
        </div>

        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
        <ul class="menu burger">
          <li>
            <Link to="/quizzes" className="burger-link" onClick={hideMenu}>
              Quizzes
            </Link>
          </li>
          <li>
            <Link to="/notes" className="burger-link" onClick={hideMenu}>
              Notes
            </Link>
          </li>
          <li>
            <Link to="/flashcards" className="burger-link" onClick={hideMenu}>
              Flashcards
            </Link>
          </li>
          <li>
            <Link to="/" className="burger-link">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
