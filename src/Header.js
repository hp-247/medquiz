import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <Link to="/home">
          <img
            className="header__logo"
            src={require("./images/med_logo.png")}
            alt="logo"
          />
        </Link>

        <Link to="/home" className="link">
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
      </div>
    </div>
  );
}

export default Header;
