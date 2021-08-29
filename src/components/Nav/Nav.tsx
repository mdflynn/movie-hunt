import React, { Dispatch, SetStateAction } from "react";
import "./Nav.css";

import SearchBar from "../SearchBar/SearchBar";
import Dropdown from "../Dropdown/Dropdown";

const Nav: React.FC<{
  search: Dispatch<SetStateAction<any>>;
  criteria: string;
  filter: Dispatch<SetStateAction<any>>;
}> = ({ search, criteria, filter }) => {
  return (
    <nav className="nav">
      <div className="search-div">
        <SearchBar search={search} criteria={criteria} />
        <Dropdown filter={filter} />
      </div>
      <p className="nav-title">Movie Hunt</p>
    </nav>
  );
};

export default Nav;
