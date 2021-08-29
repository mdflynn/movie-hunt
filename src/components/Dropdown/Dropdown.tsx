import React, { useState, Dispatch, SetStateAction } from "react";

const Dropdown: React.FC<{ filter: Dispatch<SetStateAction<any>> }> = () => {
  const [genreFilter, setGenreFilter] = useState<string>("");

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenreFilter(e.target.value);
  };

  return (
    <select
      defaultValue={"Default"}
      onChange={handleDropdownChange}
      className="dropdown"
    >
      <option value="Default">All</option>
      <option value="Action">Action</option>
      <option value="Animated">Animated</option>
      <option value="Adventure">Adventure</option>
      <option value="Biography">Biography</option>
      <option value="Children">Children</option>
      <option value="Comedy">Comedy</option>
      <option value="Comedy drama">Comedy Drama</option>
      <option value="Crime drama">Crime Drama</option>
      <option value="Dark comedy">Dark Comedy</option>
      <option value="Drama">Drama</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Historical drama">Historical Drama</option>
      <option value="Horror">Horror</option>
      <option value="Mystery">Mystery</option>
      <option value="Science fiction">Science Fiction</option>
      <option value="Thriller">Thriller</option>
      <option value="Western">Western</option>
    </select>
  );
};

export default Dropdown;
