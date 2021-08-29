import React from "react";
import "./Nav.css";

import SearchBar from "../SearchBar/SearchBar";

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <SearchBar />
      <p className="nav-title">Movie Hunt</p>
    </nav>
  );
};

export default Nav;
