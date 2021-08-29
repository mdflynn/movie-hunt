import React, { Dispatch, SetStateAction } from "react";
import "./Nav.css";

import SearchBar from "../SearchBar/SearchBar";

const Nav: React.FC<{
  search: Dispatch<SetStateAction<any>>;
  criteria: string;
}> = ({ search, criteria }) => {
  return (
    <nav className="nav">
      <SearchBar search={search} criteria={criteria}/>
      <p className="nav-title">Movie Hunt</p>
    </nav>
  );
};

export default Nav;
