import React, { useState } from "react";
import logo from "../assets/Logo_ML.png";
import { useHistory } from "react-router-dom";
import "../styles/components/Header.scss";

import SearchBar from "./SearchBar";

const Header = () => {
  const history = useHistory();
  const [searchField, setSearchField] = useState("");

  const clearSearchField = () => {
    history.push("/");
    setSearchField("");
  };
  return (
    <header className="header" role="banner">
      <div className="container header__container">
        <div className="link header__logo-container" onClick={clearSearchField}>
          <img
            src={logo}
            alt="logo-mercado-libre"
            className="icon header__logo-container__logo"
          />
        </div>
        <SearchBar searchField={searchField} setSearchField={setSearchField} />
      </div>
    </header>
  );
};

export default Header;
